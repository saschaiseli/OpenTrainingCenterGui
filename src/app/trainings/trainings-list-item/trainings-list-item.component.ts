import { Component, OnInit, Input } from '@angular/core';
import { SimpleTraining } from 'src/app/model/simple-training';

@Component({
  selector: 'tr.otc-trainings-list-item',
  templateUrl: './trainings-list-item.component.html',
  styles: []
})
export class TrainingsListItemComponent implements OnInit {
@Input() simpletraining: SimpleTraining;
  constructor() { }

  ngOnInit() {
  }

}
