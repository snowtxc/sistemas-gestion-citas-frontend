import { Component, OnInit ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientesService } from '@services/clientes/clientes.service';

import { FormGroup,Validators,FormBuilder } from '@angular/forms';

//Interfaces
import { Cita } from 'src/app/interfaces/cita';
import { ClientData } from 'src/app/interfaces/Client';
import { CitasService } from '@services/citas/citas.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.scss']
})
export class EditCitaComponent implements OnInit {

  idClientSelected: number = 0;

  idCita= 0;
  title = '';
  motivo = '';
  fecha_hora = '';

  clientes: ClientData[] = [];


  selectedCliente = [

  ];

  searchable: string = 'true';


  editForm:FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public cita_data: any,private _citaService:CitasService,private _clienteService:ClientesService,private fb:FormBuilder,private snackBar:MatSnackBar) {

    this.editForm = this.fb.group({
     cliente: ['',Validators.required],
     title: ['',Validators.required],
     motivo: ['',Validators.required],
     fecha_hora: ['',Validators.required]
   })

   this.idClientSelected = cita_data.cliente_id;

   this.idCita = cita_data.id;
   this.title = cita_data.title;
   this.motivo = cita_data.motivo;
   this.fecha_hora = cita_data.fecha_hora;





  }

  ngOnInit(): void {
    this.getClientes();
    this.getSelectedClient();

  }

  getClientes(){
    this._clienteService.getClientes().subscribe(data =>{
      this.clientes = data;

    })

  }

  getSelectedClient(){
    this._clienteService.getClienteById(this.idClientSelected).subscribe(data =>{
      this.selectedCliente = data;
    })

  }

  onSubmitEdit(){

    const cliente_id = this.editForm.controls.cliente.value.id;
    const title = this.editForm.controls.title.value;
    const motivo = this.editForm.controls.motivo.value;
    const fecha_hora = this.editForm.controls.fecha_hora.value;


    this._citaService.editCita(this.idCita,title,motivo,fecha_hora,cliente_id).subscribe(data =>{
      this.emitEditSucces();
      this.snackBar.open(data.msg,'', {duration : 3000 })

    })
  }


  emitEditSucces(){
    this._citaService.eventCloseViewInformation.next();
  }





}
