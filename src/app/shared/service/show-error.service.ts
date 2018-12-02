import { Injectable } from '@angular/core';
import { AlertComponentComponent } from '../alert-component/alert-component.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowErrorService {

  type: Subject<string> = new Subject<string>();
  message: Subject<string> = new Subject<string>();
  constructor() { }

  showError(type: string, message: string) {
    this.type.next(type);
    this.message.next(message);
  }
}
