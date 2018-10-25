import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Config } from '../shared/constants/configuration';

@Injectable()
export class UserProfileComponentService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }
    public getAllUserRoles(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('rolesall'))
            .subscribe(
                (data) => {
                    responseObject = data;
                    successcallback(responseObject);
                },
                (error) => console.log('err'),
                () => {
                    console.log('success jai getAllPRoductsByCate');
                }
            );
    }
 
}
