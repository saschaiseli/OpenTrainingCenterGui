import { Input, Component } from '@angular/core';
import { ShowErrorService } from '../service/show-error.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

@Component({
  selector: 'otc-alert-component',
  templateUrl: './alert-component.component.html',
  styles: []
})
export class AlertComponentComponent {
  show: boolean;
  type: string;
  message: string;

  constructor(private alertService: ShowErrorService) {
    this.reset();
    this.alertService.type.subscribe((value) => {
      this.type = value;
      this.show = true;
    });
    this.alertService.message.subscribe((value) => {
      this.message = value;
      this.show = true;
    });
  }

  public showError(type: string, message: string) {
    this.type = type;
    this.message = message;
    this.show = true;
  }

  reset() {
    this.type = null;
    this.message = null;
    this.show = false;
  }
}
