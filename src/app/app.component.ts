import { AuthenticationService } from './shared/service/authentication.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'otc-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'OpenTrainingCenter';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLogin(): boolean {
    return this.currentUser != null;
  }
}
