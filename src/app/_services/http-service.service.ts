import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, ConnectionBackend, RequestOptionsArgs, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpServiceService extends Http {

  public headers:Headers;
  public optionsJson: RequestOptions;

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);

    this.headers = new Headers({ "Content-Type": "application/json"});
    this.optionsJson = new RequestOptions({ headers: this.headers });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options||this.optionsJson);
  }

  put(url: string, body:any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options||this.optionsJson);
  }

  post(url: string, body:any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options||this.optionsJson);
  }

  patch(url: string, body:any, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(url, body, options||this.optionsJson);
  }

}
