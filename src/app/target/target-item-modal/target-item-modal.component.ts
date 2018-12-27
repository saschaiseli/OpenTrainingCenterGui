import { TrainingTargetFactory } from './../../shared/training-target-factory';
import { AlertService } from './../../shared/service/alert.service';
import { TargetService } from './../../shared/service/target.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingTarget } from 'src/app/model/training-target';
import { TrainingTargetKind } from 'src/app/model/training-target-kind';
import { TrainingTargetUnit } from 'src/app/model/training-target-unit';



@Component({
  selector: 'otc-target-item-modal',
  templateUrl: './target-item-modal.component.html',
  styles: []
})
export class TargetItemModalComponent implements OnInit {
  @Output()
  updateTargets = new EventEmitter<TrainingTarget>();

  targetForm: FormGroup;
  units = [
    new TrainingTargetUnit('WEEK', '7 Tage'),
    new TrainingTargetUnit('30DAYS', '30 Tage'),
    new TrainingTargetUnit('MONTH', '1 Monat'),
    new TrainingTargetUnit('YEAR', '1 Jahr')
  ];
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
    const datum = new Date(this.f.start.value.year, this.f.start.value.month - 1, this.f.start.value.day + 1);
    const target = TrainingTargetFactory.fromModal(datum, this.selectedKind.key, this.selectedUnit.key, this.f.distance.value);

    this.targetService.addTarget(target)
      .pipe()
      .subscribe(
        data => {
          this.alertService.success('Ziel abgespeichert', true);
          this.modalService.dismissAll();
          this.updateTargets.emit(target);
        },
        error => {
          this.alertService.error(error);
        });
  }
  // convenience getter for easy access to form fields
  get f() { return this.targetForm.controls; }

  setSelection(selection: TrainingTargetUnit) {
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
