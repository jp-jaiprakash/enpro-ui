import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Config } from '../shared/constants/configuration';

@Injectable()
export class PoService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public submitOldMaterial(material, successcallback) {
        let responseObject: any;
        const request = {
            header: {},
            payload: {
                materialname: material.name,
                total: material.qty,
                unitBean: {
                    unitid: material.unit
                },
                user2: {
                    userid: +localStorage.getItem('userid') ? +localStorage.getItem('userid') : 1
                }
            }

        };
        this._httpService.postRequest(Config.getEnvironmentVariable('addOldMaterial'), request)
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
