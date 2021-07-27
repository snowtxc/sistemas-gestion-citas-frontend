import { Component, OnInit ,Inject} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientesService } from '@services/clientes/clientes.service';


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

  constructor(@Inject(MAT_DIALOG_DATA) public client_data: ClientData, private _clientService:ClientesService,private _snackBar:MatSnackBar) {
    this.id = client_data.id;
    this.nombre = client_data.name;
    this.apellido = client_data.surname;
    this.celular = client_data.phone;

   }

  ngOnInit(): void {
  }

  onSubmitDelete(){
    this._clientService.deleteCliente(this.id).subscribe(data =>{
      this._snackBar.open(data.msg,'',{duration : 3000});
      this._clientService.emitUpdateClients();
    })
  }

}
