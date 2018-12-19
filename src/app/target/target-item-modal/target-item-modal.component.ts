import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'otc-target-item-modal',
  templateUrl: './target-item-modal.component.html',
  styles: []
})
export class TargetItemModalComponent implements OnInit {
  targetForm: FormGroup;
  units = ['7 Tage', '30 Tage', '1 Monat', '1 Jahr'];
  selectedUnit = this.units[0];
  kinds = ['Distanz [km]', 'Stunden [h]'];
  selectedKind = this.kinds[0];
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
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
    // call service
    console.log('call service ');
  }
  // convenience getter for easy access to form fields
  get f() { return this.targetForm.controls; }

  setSelection(selection: string) {
    this.selectedUnit = selection;
  }
  setSelectionKind(selection: string) {
    this.selectedKind = selection;
  }

  onSubmit() {
    console.log('submit ' + this.targetForm.value);
    this.modalService.dismissAll();
  }
}
