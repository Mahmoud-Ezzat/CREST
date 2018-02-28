
import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariables } from '../global';
import { Observable } from 'rxjs/Rx'
import { RequestDetails  } from '../Interfaces/RequestDetails'
@Injectable()
export class RequestDetailsService {
    //HEADER_JSON: {'Content-Type': 'application/json'}
    serviceUrl: string = 'http://localhost:52619/CFPGService.svc/api/'; // GlobalVariables.API_URL;
    headers: Headers;
    options: RequestOptions;
    errors: any;
    constructor(private http: Http) {
        this.headers = new Headers();
        // this.headers.append('Access-Control-Allow-Headers','Content-Type, Authorization, api_token, user_token')
        //this.headers.append('Content-Type', 'application/json')
        this.headers.append('CFPGCustomHeader','4465C654-FC48-4495-A5C6-07D9BA964E9C');
        this.headers.append('userID','2');
        this.options = new RequestOptions({ headers: this.headers });
    }
    getData(requestId: any) {
        // return this.http.get( this.serviceUrl + 'GetFacilityRequestDetails?CFID='+ requestId ,{headers: this.headers})
        //     .map(res =><RequestDetails> res.json())
        //     .catch((error:any) =>
        //     this.errors = Observable.throw(error.json().error || 'Server error'));;
        return this.http.get( this.serviceUrl + 'GetFacilityRequestDetails?CFID=78' ,{headers: this.headers})
        .map(res =><RequestDetails> res.json())
        .catch((error:any) =>
        this.errors = Observable.throw(error.json().error || 'Server error'));;

    }
}