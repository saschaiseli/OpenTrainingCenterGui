import { ErrorInterceptor } from './shared/error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SimpleTrainingServiceService } from './shared/service/simple-training-service.service';
import { FileUploadModalComponent } from './upload/file-upload-modal/file-upload-modal.component';
import { AlertComponentComponent } from './shared/alert-component/alert-component.component';
import { ShowErrorService } from './shared/service/show-error.service';
import { FileSizePipe } from './shared/pipe/file-size.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FileUploadModalComponent,
    AlertComponentComponent,
    FileSizePipe,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SimpleTrainingServiceService, ShowErrorService, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
