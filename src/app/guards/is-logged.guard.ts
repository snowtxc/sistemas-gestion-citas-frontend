import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { Observable } from 'rxjs';

import {map,retry,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {

  constructor(private _auth:AuthenticationService,private _router:Router){}

  canActivate():Observable<boolean>{
    return this._auth.isLogged().pipe(catchError((err:HttpErrorResponse) => {
      if(err.status ==  401){
        this._router.navigate(['login']);
      }
      retry(3);
      return throwError(err.error);

     }));
  }
}
