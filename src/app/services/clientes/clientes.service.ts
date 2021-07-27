import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClientData } from 'src/app/interfaces/Client';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class ClientesService {

  eventSubjectUpdateClient: Subject<any>;

  constructor(private _http:HttpClient) {
    this.eventSubjectUpdateClient = new Subject();
  }

  createCliente(name:string,surname:string,phone:string):Observable<any>{
    const body_content = {
      name: name,
      surname: surname,
      phone: phone
    }

    const headers = new HttpHeaders();

    return this._http.post("/api/clientes",body_content,{headers: headers});


  }

  getClientes():Observable<any>{
     return this._http.get("/api/clientes");
  }

  getClienteById(id:number):Observable<any>{
     return this._http.get("/api/clientes/"+id+"/info");
  }

  deleteCliente(id:number):Observable<any>{
    return this._http.delete("/api/clientes/"+id+"/delete");
  }

  editCliente(id:number ,name:string,surname:string,phone:string):Observable<any>{
    const body_content = {
      name: name,
      surname: surname,
      phone: phone
    }

    const headers = new HttpHeaders();

    return this._http.put("/api/clientes/"+id+"/edit",body_content,{headers: headers});

  }


  emitUpdateClients(){
    this.eventSubjectUpdateClient.next();
  }



}
