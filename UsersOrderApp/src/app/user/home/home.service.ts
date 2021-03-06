import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../shared/constants/configuration';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable()
export class HomeService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public getAllMaterialsWithQty(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('materialqty'))
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
