import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpRequestService } from './shared/services/http-request.service';
import { Http, HttpModule } from '../../node_modules/@angular/http';
import { AddorderComponent } from './user/addorder/addorder.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CustomsidebarComponent } from './shared/customsidebar/customsidebar.component';
import { JobsComponent } from './user/jobs/jobs.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { JobstatusComponent } from './jobstatus/jobstatus.component';
import { AddoldmaterialComponent } from './addoldmaterial/addoldmaterial.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { ExportexcelComponent } from './exportexcel/exportexcel.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AddorderComponent,
    CustomsidebarComponent,
    JobsComponent,
    PurchaseorderComponent,
    UserprofileComponent,
    JobstatusComponent,
    AddoldmaterialComponent,
    DialogDemoComponent,
    ExportexcelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent],
  entryComponents: [DialogDemoComponent]
})
export class AppModule { }
