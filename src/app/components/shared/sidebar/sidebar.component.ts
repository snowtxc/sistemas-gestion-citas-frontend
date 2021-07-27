import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '@services/authentication/authentication.service';


import { Subscription, interval } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{

  dateInfo = "";
  dateTimeUpdate$ = interval(1000);

  userInfo:User = {
    id: 0,
    name: '',
    surname : ''

  }



  public dateTimeSubscription : Subscription;

  MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  DIAS = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ]

  constructor(private _auth:AuthenticationService) {
    this.getTime();

    this.dateTimeSubscription = this.dateTimeUpdate$.subscribe(() => {
      this.getTime();
    })


  }



  ngOnInit(): void {
    this.loadUserInfo();


  }

  getTime(){
    const date = new Date();

    const month = this.MESES[date.getMonth()];
    const dayNumber = date.getDate();
    const day =  this.DIAS[date.getDay() - 1]
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    this.dateInfo = day + " " + dayNumber + " de " + month + " " + hours+":"+minutes+":"+seconds;

  }

  loadUserInfo(){

    this._auth.getUserById().subscribe(data =>{
      this.userInfo = data;
    });
   }

  ngOnDestroy(){
    this.dateTimeSubscription.unsubscribe();

  }



}
