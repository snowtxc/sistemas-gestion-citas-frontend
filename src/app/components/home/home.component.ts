import { Component, OnDestroy, OnInit } from '@angular/core';

import {timer,Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{

  load = false;
  timeOut = timer(2000);

  timeOutSuscription:Subscription;



  constructor() { 
    this.timeOutSuscription = this.timeOut.subscribe(() => {
      this.load = true;
    })
  }

  ngOnInit(): void {
   
  }

 

  ngOnDestroy(){
    this.timeOutSuscription.unsubscribe();

  }




  

}
