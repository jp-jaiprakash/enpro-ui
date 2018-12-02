import { Injectable } from '../../../../node_modules/@angular/core';
import { Router } from '@angular/router';
import { Config } from '../../shared/constants/configuration';
import { HttpRequestService } from '../../shared/services/http-request.service';

@Injectable()
export class JobsComponentService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }
    savenormaljob(regularjob, successcallback): any {
        let responseObject: any;
        const request = {
            header: {},
            payload: {
                jobclientname: regularjob.clientname,
                jobdeliverydate: regularjob.compleiondate,
                jobid: regularjob.jobid,
                user2: 1
            }

        };
        this._httpService.postRequest(Config.getEnvironmentVariable('savenormaljob'), request)
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

    savestocksubjob(regularjob, jobtype, successcallback): any {
        let responseObject: any;
        const request = {
            header: {},
            payload: {
                materialNewname: regularjob.productname,
                unitId: regularjob.unit,
                substockjobautoid: null,
                jobid: regularjob.jobid,
                jobtype: jobtype,
                materialsmappinglst: [
                    {
                        materialsource: jobtype === 2 ? 'Stock Job' : 'Sub Job',
                        quantity: regularjob.productqty,
                        unitprice: 0
                    }
                ],
                user2: {
                    userid: 1
                }
            }

        };
        this._httpService.postRequest(Config.getEnvironmentVariable('savestocksubjob'), request)
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
