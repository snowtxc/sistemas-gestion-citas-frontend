import { Component, OnInit } from '@angular/core';


import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


import { MatDialog } from '@angular/material/dialog';

//Dialogs components
import { AddCitaComponent } from './dialogs/add-cita/add-cita.component';
import { ViewCitaComponent } from './dialogs/view-cita/view-cita.component';
import { CitasService } from '@services/citas/citas.service';



@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  calendarOptions: CalendarOptions = {

    initialView: 'dayGridMonth',

    events: [

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

  load  = false;

  constructor(private _citaService:CitasService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCitas();

    this._citaService.eventUpdateCitas.subscribe(() =>{
      this.getCitas();
    })

    this._citaService.eventCloseViewInformation.subscribe(() =>{
      this.getCitas();
    })



  }



  getCitas(){
    this._citaService.getCitas().subscribe(data =>{
      let fechas = [];
      for(let i = 0; i < data.length; i ++){
        fechas.push({
            id: data[i].id,
            title: data[i].title,
            start: data[i].fecha,
            allDay: false
        })
      }
      this.calendarOptions.events = fechas;
      this.load = true;

    })

  }

  openDialogAddCita(){
    this.dialog.open(AddCitaComponent, {
      width: '620px',
      height: '70vh',
    });


  }


  openDialogViewCita(data:any) {
    const id_cita = data.id;
    const dialogEdit = this.dialog.open(ViewCitaComponent, {
      data: id_cita
    });

  }

  handleDateClick(arg:any) {
     const data = arg.event;
     this.openDialogViewCita(data);
  }






}
