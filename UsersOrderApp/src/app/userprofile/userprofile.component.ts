import { Component, OnInit } from '@angular/core';
import { UserProfileComponentService } from './userprofile.service.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [UserProfileComponentService]
})
export class UserprofileComponent implements OnInit {

  constructor(private _userProfileService: UserProfileComponentService) { }

  public allRoles = [];
  public allowedRoles = [];
  public addeduser ={
username: '',
pwd: ''
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
}
