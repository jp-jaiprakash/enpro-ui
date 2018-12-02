import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

// import { Observable } from 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import { throwError } from 'rxjs';

@Injectable()
export class HttpRequestService {

  constructor(private http: Http) { }

  public getRequest(urlPath: string): Observable<any> {
    const _headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: _headers });

    return this.http.get(urlPath, options)
      .map((resObj: Response) => resObj.json())
      .catch((errorObj: any) => Observable.throw(errorObj.json.error || 'Server Error'));

  }

  public postRequest(urlPath: string, postData: any): Observable<any> {
    const _headers = new Headers({ 'Content-type': 'application/json' });
    const options = new RequestOptions({ headers: _headers });

    return this.http.post(urlPath, postData, options)
      .map((resObj: Response) => resObj.json())
      .catch((res: Response) => this.onError(res));
  }
  onError(res: Response) {
    const statusCode = res.status;
    const body = res.json();
    const error = {
      statusCode: statusCode,
      error: body.error
    };
    return throwError(error);
  }

}
