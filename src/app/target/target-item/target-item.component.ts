import { GoalUnitPipe } from '../pipe/goal-unit.pipe';
import { TrainingTarget } from 'src/app/model/training-target';
import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tr.otc-target-item',
  templateUrl: './target-item.component.html',
  providers: [NgbProgressbarConfig],
  styles: []
})
export class TargetItemComponent implements OnInit {
  @Input() trainingtarget: TrainingTarget;
  progressType: string;
  constructor(private config: NgbProgressbarConfig) {
    config.striped = false;
    config.animated = false;
    // config.type = 'success';
    config.height = '20px';
  }

  ngOnInit() {
    this.progressType = this.getType();
    this.config.type = this.progressType;
  }

  getType(): string {
    if (this.trainingtarget.progress > 90) {
      return 'success';
    } else if (this.trainingtarget.progress > 50) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

}
