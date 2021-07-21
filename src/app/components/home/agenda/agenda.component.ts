import { Component, OnInit } from '@angular/core';


import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


import { MatDialog } from '@angular/material/dialog';

//Dialogs components
import { AddCitaComponent } from './dialogs/add-cita/add-cita.component';
import { ViewCitaComponent } from './dialogs/view-cita/view-cita.component';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',
    
    events: [
      {
        id: '1',
        title: 'Odontologia',
        start: '2021-07-01T14:15:00',
        allDay: false
      },
      {
        id: '2',
        title: 'Extraccion',
        start: '2021-07-01T14:30:00',
        allDay: false
      }
      // other events here...
    ],
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',  
      second: '2-digit',
      meridiem: false
    },
    locale: 'es',
    
    eventClick: this.handleDateClick.bind(this)


  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   
  
  
  }

  openDialogAddCita(){
    this.dialog.open(AddCitaComponent, {
      width: '620px',
      height: '70vh',
    });
    

  }

  openDialogEditCita(){

  }

  openDialogDeleteCita() {

  }

  openDialogViewCita(data:any) {
    console.log(data);
    const dialogEdit = this.dialog.open(ViewCitaComponent, {
      data: data  
    });

  }

  handleDateClick(arg:any) {
     const data = arg.event;
     this.openDialogViewCita(data);
  }


  
  

  
}
