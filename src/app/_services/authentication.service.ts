import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import {User} from "../model";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  register(user: User): Observable<any> {
    let body = JSON.stringify(user);
    return this.http.post('/api/authentication/signup', body).map(this.extractor).catch(this.handleError);
  }

  login(email: string, password: string) {
    let body = JSON.stringify({email: email, password: password});
    return this.http.post('/api/authentication/login', body).map(this.extractor).catch(this.handleError);
  }




  extractor(res: Response) {
    let body = null;
    try {
      body = res.json();
    } catch (e) {
      body = {};
    }
    return body || {};
  }

  public handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We"d also dig deeper into the  error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : "Server error";
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
