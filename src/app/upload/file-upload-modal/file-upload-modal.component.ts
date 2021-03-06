import { FileSizePipe } from './../../shared/pipe/file-size.pipe';
import { SimpleTrainingServiceService } from './../../shared/service/simple-training-service.service';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Config } from './../../shared/config';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'otc-file-upload-modal',
  templateUrl: './file-upload-modal.component.html',
  styles: []
})
export class FileUploadModalComponent {
  @Output() newFile = new EventEmitter<any>();
  fSize: number;
  isValidFile: boolean;
  fileAlreadyExists: boolean;
  message: string;
  error: Error;
  selectedFile: File;
  closeResult: string;
  constructor(private modalService: NgbModal, private http: HttpClient, private trainingService: SimpleTrainingServiceService) { }


  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.fSize = this.selectedFile.size / 1024;
    this.trainingService.existsFileNameByAthlete(this.selectedFile.name).subscribe(res => this.fileAlreadyExists = res);
    this.isValidFile = this.selectedFile.name.toUpperCase().endsWith('.FIT') && !this.fileAlreadyExists;
  }

  onUpload() {
    console.log(Config.api);
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');

    this.http.post(Config.api + '/upload', fd, {
      headers: headers,
      observe: 'events'
    })
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          this.newFile.emit();
          this.trainingService.success();
          // this.errorService.showError('success', 'Training konnte hochgeladen werden');
        },
        error => {
          console.log('Error', error);
          this.message = error;
        }
      );
  }

  open(content) {
    this.isValidFile = false;
    this.fileAlreadyExists = null;
    this.fSize = null;
    this.message = null;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      this.onUpload();
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

