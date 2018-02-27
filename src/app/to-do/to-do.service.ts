
import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalVariables } from '../global';
import { Observable } from 'rxjs/Rx'


@Injectable()
export class ToDoService {
    //HEADER_JSON: {'Content-Type': 'application/json'}
    serviceUrl: string = GlobalVariables.API_URL;
    headers: Headers;
    options: RequestOptions;
    errors: any;
    constructor(private http: Http) {
        this.headers = new Headers();
        // this.headers.append('access-control-allow-origin', '*')
        // this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        // this.headers.append('Access-Control-Allow-Headers','Content-Type, Authorization, api_token, user_token')
        //this.headers.append('Content-Type', 'application/json')
        this.headers.append('CFPGCustomHeader','4465C654-FC48-4495-A5C6-07D9BA964E9C');
        this.options = new RequestOptions({ headers: this.headers });
    }
    getData() {
        return this.http.get(this.serviceUrl + 'GetFacilitiesToBeCancelled?userRoleId=2',{headers: this.headers})
            .map(res => res.json())
            .catch((error:any) =>
            this.errors = Observable.throw(error.json().error || 'Server error'));;
    }
}