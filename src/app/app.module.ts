import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { SimpleTrainingServiceService } from './shared/service/simple-training-service.service';
import { FileUploadModalComponent } from './upload/file-upload-modal/file-upload-modal.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { AlertComponentComponent } from './shared/alert-component/alert-component.component';
import { ShowErrorService } from './shared/service/show-error.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FileUploadModalComponent,
    AlertComponentComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SimpleTrainingServiceService, ShowErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
