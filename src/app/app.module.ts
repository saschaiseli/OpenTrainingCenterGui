import { TokenInterceptor } from './shared/interceptor/token-interceptor';
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
  providers: [SimpleTrainingServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
