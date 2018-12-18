import { TrainingTarget } from 'src/app/model/training-target';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr.otc-target-item',
  templateUrl: './target-item.component.html',
  styles: []
})
export class TargetItemComponent implements OnInit {
  @Input() trainingtarget: TrainingTarget;
  constructor() { }

  ngOnInit() {
  }

}
