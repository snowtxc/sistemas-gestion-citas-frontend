import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';


//Rxjs
import { BehaviorSubject, Observable } from 'rxjs';
import {map,retry,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


import { LocalstorageService } from '@services/localstorage/localstorage.service';

//Interfaces
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {


constructor(private _http:HttpClient,private _localStorage:LocalstorageService,private _router:Router) {
 }

  login(email:string, password:string):Observable<any>{
    const body_content = {
      email: email,
      password: password
    }
    let headers = new HttpHeaders();

    return this._http.post("/api/auth/login", body_content,{headers: headers}).pipe(catchError((err) => {
      retry(3);
      return throwError(err.error);
     })).pipe(map(data => {
       const datos =  Object.create(data);

       const token = datos.token;

       this._localStorage.setToken(token);
     }

      ));
  }

  logout(){
    this._localStorage.destroyToken();
    location.reload();

  }


  getUserById():Observable<any>{
    return this._http.get("/api/user").pipe(catchError((err) => {

      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));
  }


  isLogged():Observable<any>{
      return this._http.get("/api/user/is-logged");
  }


  handleError(err:any){
    if(err instanceof HttpErrorResponse){
      if(err.status == 401){    //Unanthorized
        return false;
      }


    }

  }



}
