import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Config } from './../../shared/config';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { TargetUnit } from 'src/app/model/target-unit.enum';

@Component({
  selector: 'otc-target-item-edit-modal',
  templateUrl: './target-item-edit-modal.component.html',
  styles: []
})
export class TargetItemEditModalComponent implements OnInit {
  formValid = false;
  distanz: number;
  distanzFehler: string;
  trainingTargetForm: FormGroup;
  model: NgbDateStruct;
  date: { year: number, month: number, day: number };
  selectedUnit = '...';
  targetUnits = ['Woche', 'Monat', 'Jahr'];
  constructor(private modalService: NgbModal, private calendar: NgbCalendar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.trainingTargetForm = this.formBuilder.group({
      distanz: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.trainingTargetForm.controls; }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      this.onSave();
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSave() {
    console.log('Save Target ' + Config.api);
  }

  validate() {
    this.formValid = true;
    if (this.distanz < 100) {
      this.distanzFehler = 'ned gfuet';
      this.formValid = false;
    } else {
      this.distanzFehler = null;
    }
  }

  setSelection(unit: string) {
    console.log('schnabber ' + unit);
    this.selectedUnit = unit;
  }
}
