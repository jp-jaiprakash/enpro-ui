import { Component, OnInit } from '@angular/core';
import { UserProfileComponentService } from './userprofile.service.component';
import { MatDialog } from '@angular/material';
import { DialogDemoComponent } from '../dialog-demo/dialog-demo.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserProfileComponentService]
})
export class UserprofileComponent implements OnInit {
  isPopupOpened = true;
  pwdnotmatch: boolean;
  constructor(private _userProfileService: UserProfileComponentService, private dialog?: MatDialog) { }
  public allowedToCreate = false;
  public allRoles = [];
  public allowedRoles = [];
  public addeduser = {
    username: '',
    pwd: '',
    cnfpwd: ''
  };
  ngOnInit() {
    this.autopopulate();

  }

  public autopopulate() {
    const successcallback = (data) => {
      this.allRoles = data;
    };
    this._userProfileService.getAllUserRoles(successcallback);
  }

  public checkRole(event, id) {
    // console.log(event.checked);
    if (event.checked) {
      this.allowedRoles.push(id);
    } else {
      const index: number = this.allowedRoles.indexOf(id);
      if (index !== -1) {
        this.allowedRoles.splice(index, 1);
      }
    }
    console.log(this.allowedRoles);
  }

  addContact() {
    this.isPopupOpened = true;
    this.allowedToCreate = false;
    const dialogRef = this.dialog.open(DialogDemoComponent, {
      data: {}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
      console.log('result', result);
      if (result === 'closed') {
        this.allowedToCreate = true;
        this.addNewUser();
      }
    });
  }

  addNewUser() {
    this.pwdnotmatch = false;
    if (this.addeduser.pwd && this.addeduser.cnfpwd && (this.addeduser.pwd === this.addeduser.cnfpwd)) {
      console.log('ready to call');
    } else {
      this.pwdnotmatch = true;
    }
  }
}
