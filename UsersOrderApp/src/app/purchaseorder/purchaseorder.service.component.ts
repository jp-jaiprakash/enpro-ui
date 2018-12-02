import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from '../shared/services/http-request.service';
import { Config } from '../shared/constants/configuration';

@Injectable()
export class PoService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public getJobids(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('jobids'))
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

    public getSubJobids(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('subjobids'))
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

    public getStockJobids(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('stockjobids'))
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

    public getAllMaterials(successcallback) {
        let responseObject: any;
        this._httpService.getRequest(Config.getEnvironmentVariable('materialall'))
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
    savenormaljobpo(ponormal,  successcallback): any {
        let responseObject: any;
        const request = {
            header: {},
            payload: {


                'dateofpurchase': ponormal.dateofpurchase,
                'jobid': ponormal.jobid,
                'poid': ponormal.ponumber,
                'purchasedqty': ponormal.purchasedqty,
                'requiredqty': ponormal.requiredqty,

                'material': {
                    'materialname': ponormal.materialname,
                    'unitPrice': ponormal.cost,
                    'unitBean': {
                        'unitid': ponormal.unitofpurchase
                    }

                },
                'user2': {
                    'userid': 1
                }


            }

        };
        this._httpService.postRequest(Config.getEnvironmentVariable('ponormaljob'), request)
            .subscribe(
                (data) => {
                    responseObject = data;
                    successcallback(responseObject);
                },
                (error) => console.log(error),
                () => {
                    console.log('success jai getAllPRoductsByCate');
                }
            );

    }

}
