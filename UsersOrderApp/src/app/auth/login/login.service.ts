import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../shared/constants/configuration';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable()
export class LoginService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public getAllUsers(user, successcallback) {
        let responseObject: any;
        const request = {
            header: {},
            payload: {
            username: user.username,
            userpassword: user.password}

        };
        this._httpService.postRequest(Config.getEnvironmentVariable('finduser'), request)
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

    public getUserByname() {

    }

}
