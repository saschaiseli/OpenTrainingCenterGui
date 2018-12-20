import { AlertService } from './../../shared/service/alert.service';
import { TargetService } from './../../shared/service/target.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingTarget } from 'src/app/model/training-target';
import { TrainingTargetKind } from 'src/app/model/training-target-kind';

@Component({
  selector: 'otc-target-item-modal',
  templateUrl: './target-item-modal.component.html',
  styles: []
})
export class TargetItemModalComponent implements OnInit {
  targetForm: FormGroup;
  units = ['7 Tage', '30 Tage', '1 Monat', '1 Jahr'];
  selectedUnit = this.units[0];
  kinds = [new TrainingTargetKind('DISTANCE', 'Distanz [km]'), new TrainingTargetKind('HOURS', 'Stunden [h]')];
  selectedKind = this.kinds[0];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private targetService: TargetService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.targetForm = this.formBuilder.group({
      start: ['', Validators.required],
      distance: ['', [Validators.required, Validators.min(1)]]
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  sendToServer() {
    console.log('call service ');

    const target = new TrainingTarget(null, new Date(this.f.start.value.year, this.f.start.value.month - 1, this.f.start.value.day),
      this.selectedKind.key, this.selectedUnit, this.f.distance.value);

    this.targetService.addTarget(target)
      .pipe()
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.modalService.dismissAll();
        },
        error => {
          this.alertService.error(error);
        });
  }
  // convenience getter for easy access to form fields
  get f() { return this.targetForm.controls; }

  setSelection(selection: string) {
    this.selectedUnit = selection;
  }
  setSelectionKind(selection: TrainingTargetKind) {
    this.selectedKind = selection;
  }

  onSubmit() {
    console.log('submit ' + this.targetForm.value);
    this.sendToServer();
  }
}
