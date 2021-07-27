import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientesService } from '@services/clientes/clientes.service';




import { ClientData } from 'src/app/interfaces/Client';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {

   id:number = 0;
   nombre:string = '';
   apellido:string = '';
   celular:string = '';


  //Forms
  public editForm:FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public client_data: ClientData,private clientService:ClientesService,private snack:MatSnackBar) {
    this.id = client_data.id;
    this.nombre = client_data.name;
    this.apellido = client_data.surname;
    this.celular = client_data.phone;


    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]]
    });

   }


  ngOnInit(): void {

  }

  onSubmitEdit(){
    const name = this.editForm.controls.nombre.value;
    const surname = this.editForm.controls.apellido.value;
    const phone = this.editForm.controls.celular.value;

    this.clientService.editCliente(this.id,name,surname,phone).subscribe(() =>{
      this.clientService.emitUpdateClients();
      this.snack.open('Informacion de cliente actualizada correctamente','', {duration : 3000, horizontalPosition: 'right', verticalPosition: 'bottom'});
    })




  }




}
