import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitasService } from '@services/citas/citas.service';


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

  citaInfo = {
    id:  0,
    title:  '',
    fecha_hora: '',
    motivo:  '',
    cliente_id: 0,
    cliente_nombre :  '',
    cliente_apellido:  '',
    cliente_celular: ''
  }

  load = false;




  constructor(@Inject(MAT_DIALOG_DATA) public cita_id: number, private dialog:MatDialog,private _citaService:CitasService) {
      this.citaInfo.id = cita_id;
   }

  ngOnInit(): void {
    this.loadCita(this.citaInfo.id);

    this._citaService.eventCloseViewInformation.subscribe(() =>{
      this.dialog.closeAll();
    })
  }


  loadCita(id:number){
    this._citaService.getCitaById(id).subscribe(data =>{
      this.citaInfo.title = data.title;
      this.citaInfo.fecha_hora = data.fecha;
      this.citaInfo.motivo = data.motivo;
      this.citaInfo.cliente_id = data.Cliente.id;
      this.citaInfo.cliente_nombre = data.Cliente.name;
      this.citaInfo.cliente_apellido = data.Cliente.surname;
      this.citaInfo.cliente_celular = data.Cliente.phone;

      this.load = true;
    })

  }


  openDialogEdit(){
    this.dialog.open(EditCitaComponent,{
      data: this.citaInfo
    })
  }


  openDialogDelete(){
    this.dialog.open(DeleteCitaComponent,{
      data: this.cita_id
    })
  }

}
