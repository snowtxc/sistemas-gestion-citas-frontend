import { Component, OnInit ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';



//Interfaces
import { Cita } from 'src/app/interfaces/cita';
import { ClientData } from 'src/app/interfaces/Client';



@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.scss']
})
export class EditCitaComponent implements OnInit {

  id: number = 0;
  title: string = 'Odontologia'
  fecha_hora: string = '23/07/2021 18:00hs';
  motivo: string = 'Control odontologico';
  cliente_id:number = 8;
  cliente_nombre: string = 'Rodrigo';
  cliente_apellido: string = 'Castro';
  cliente_celular: string = '092365856';


  clientes: ClientData[] = [];


  selectedCliente = [
    { id: 2, playerName: 'Toni Kroos' }
  ];

  searchable: string = 'true';
  



  constructor(@Inject(MAT_DIALOG_DATA) public cita_data: Cita) { 
   

    
  }

  ngOnInit(): void {

  }

  getClientes(){

  }


  


}
