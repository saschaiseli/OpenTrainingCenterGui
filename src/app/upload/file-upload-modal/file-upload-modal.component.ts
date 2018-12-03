import { AlertComponentComponent } from './../../shared/alert-component/alert-component.component';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Config } from './../../shared/config';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ShowErrorService } from 'src/app/shared/service/show-error.service';


@Component({
  selector: 'otc-file-upload-modal',
  templateUrl: './file-upload-modal.component.html',
  styles: []
})
export class FileUploadModalComponent {
  fileSize: number;
  isValidFile: boolean;
  message: string;
  error: Error;
  selectedFile: File;
  closeResult: string;
  constructor(private modalService: NgbModal, private http: HttpClient, private errorService: ShowErrorService) { }


  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.isValidFile = this.selectedFile.name.toUpperCase().endsWith('.FIT');
    this.fileSize = this.selectedFile.size;
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
         // this.errorService.showError('success', 'Training konnte hochgeladen werden');
        },
        error => {
          console.log('Error', error);
          this.message = error;
          this.errorService.showError('danger', 'Da ist beim speichern etwas schief gegangen');
        }
      );
  }

  open(content) {
    this.isValidFile = false;
    this.fileSize = null;
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
