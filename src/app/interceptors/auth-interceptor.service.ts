import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { LocalstorageService } from '@services/localstorage/localstorage.service';


import {Router} from "@angular/router";

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private _localStorage:LocalstorageService,private _router:Router) { }

  intercept(request:HttpRequest<unknown>,next:HttpHandler):Observable<HttpEvent<unknown>>{
    request = this.addToken(request);
    return next.handle(request);

  }

  private addToken(request:HttpRequest<any>){
     const token = this._localStorage.getToken();

     if (token) {
      let headers = request.headers
        .set('Content-Type', 'application/json')
        .set('authorization', token);

      const cloneReq = request.clone({ headers });

      return cloneReq;

     }else {
      return request;
     }



 }
}
