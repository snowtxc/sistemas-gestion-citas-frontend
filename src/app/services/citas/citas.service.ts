import { Injectable } from '@angular/core';

import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { catchError,retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  eventUpdateCitas: Subject<any>;

  eventCloseViewInformation:Subject<any>;


  constructor(private _http:HttpClient,private _router:Router) {
    this.eventUpdateCitas = new Subject();
    this.eventCloseViewInformation = new Subject();
  }



  createCita(title:string,motivo:string,fecha: string,clienteID:number):Observable<any>{
    const body_content = {
      title: title,
      motivo: motivo,
      fecha: fecha,
      clienteID: clienteID
    }

    const headers = new HttpHeaders();
    return this._http.post("/api/citas",body_content,{headers: headers}).pipe(catchError((err) => {

      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));;


  }

  getCitas():Observable<any>{
     return this._http.get("/api/citas").pipe(catchError((err) => {
      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));;;
  }

  getCitaById(id:number):Observable<any>{
     return this._http.get("/api/citas/"+id+"/info").pipe(catchError((err) => {

      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));;;
  }

  deleteCita(id:number):Observable<any>{
    return this._http.delete("/api/citas/"+id+"/delete").pipe(catchError((err) => {

      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));;;
  }


  editCita(id:number,title:string,motivo:string,fecha: string,clienteID:number):Observable<any>{
    const body_content = {
      title: title,
      motivo: motivo,
      fecha: fecha,
      clienteID: clienteID
    }

    const headers = new HttpHeaders();

    return this._http.put("/api/citas/"+id+"/edit",body_content,{headers: headers}).pipe(catchError((err) => {

      this.handleError(err);
      retry(3);
      return throwError(err.error);

     }));;;


  }


  emitUpdateCitas(){
    this.eventUpdateCitas.next();
  }


  handleError(err:any){
    if(err instanceof HttpErrorResponse){
      if(err.status == 401){    //Unanthorized
        this._router.navigate(['login']);
      }
    }

  }
}
