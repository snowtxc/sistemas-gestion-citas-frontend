import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


//Interfaces
import { Cita } from 'src/app/interfaces/cita';


//Components dialog
import { DeleteCitaComponent } from '../delete-cita/delete-cita.component';
import { EditCitaComponent } from '../edit-cita/edit-cita.component';

@Component({
  selector: 'app-view-cita',
  templateUrl: './view-cita.component.html',
  styleUrls: ['./view-cita.component.scss']
})
export class ViewCitaComponent implements OnInit {

  id: number = 0;
  title: string = ''
  fecha_hora: string = '';
  motivo: string = '';
  cliente_nombre : string  = '';
  cliente_apellido: string = '';
  cliente_celular: string = '';



  constructor(@Inject(MAT_DIALOG_DATA) public cita_data: Cita, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadCita();
  }
  

  loadCita(){
    this.id = 1;
    this.title = 'Dentista';
    this.fecha_hora = '19/07/21 13:45hs'
    this.motivo = 'Cita odontologica',
    this.cliente_nombre = 'Rodrigo';
    this.cliente_apellido = 'Castro';
    this.cliente_celular = '092365856';
  }


  openDialogEdit(){
    this.dialog.open(EditCitaComponent)
  }


  openDialogDelete(){
    this.dialog.open(DeleteCitaComponent)
  }

}
