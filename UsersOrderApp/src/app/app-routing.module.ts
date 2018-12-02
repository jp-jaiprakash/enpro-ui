import { NgModule } from '../../node_modules/@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { AddorderComponent } from './user/addorder/addorder.component';
import { JobsComponent } from './user/jobs/jobs.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { JobstatusComponent } from './jobstatus/jobstatus.component';
import { AddoldmaterialComponent } from './addoldmaterial/addoldmaterial.component';
import { ExportexcelComponent } from './exportexcel/exportexcel.component';

const routes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'dashboard', component: HomeComponent},
{ path: 'addorder', component: AddorderComponent},
{ path: 'addoldmaterial', component: AddoldmaterialComponent},
{ path: 'jobs', component: JobsComponent},
{ path: 'po', component: PurchaseorderComponent},
{ path: 'userprofile', component: UserprofileComponent},
{ path: 'jobstatus', component: JobstatusComponent},
{ path: 'export', component: ExportexcelComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]})
export class AppRoutingModule {}
