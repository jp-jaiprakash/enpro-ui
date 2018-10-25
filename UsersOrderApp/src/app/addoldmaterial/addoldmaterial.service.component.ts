import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Config } from '../shared/constants/configuration';

@Injectable()
export class PoService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

 
    public getAllUnits(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('units'))
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
