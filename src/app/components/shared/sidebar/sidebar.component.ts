import { Component, OnDestroy, OnInit } from '@angular/core';


import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy{

  dateInfo = "";
  dateTimeUpdate$ = interval(1000);

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

  constructor() { 
    this.getTime();
    
    this.dateTimeSubscription = this.dateTimeUpdate$.subscribe(() => {
      this.getTime();
    })
  }

   

  ngOnInit(): void {
   
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

  ngOnDestroy(){
    this.dateTimeSubscription.unsubscribe();

  }

}
