import { Component, OnInit ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ClientData } from 'src/app/interfaces/Client';

@Component({
  selector: 'app-delete-cliente',
  templateUrl: './delete-cliente.component.html',
  styleUrls: ['./delete-cliente.component.scss']
})
export class DeleteClienteComponent implements OnInit {
  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  celular: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public client_data: ClientData) {
    this.id = client_data.id;
    this.nombre = client_data.nombre;
    this.apellido = client_data.apellido;
    this.celular = client_data.celular;
     
   }

  ngOnInit(): void {
  }

  onSubmitDelete(){
    console.log(this.id);

  }

}
