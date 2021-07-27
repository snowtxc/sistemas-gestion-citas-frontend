import { Component, OnInit } from '@angular/core';

import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ClientesService } from '@services/clientes/clientes.service';

import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public formAdd:FormGroup;

  constructor(private fb:FormBuilder,private _clienteService:ClientesService,private snack:MatSnackBar) {
    this.formAdd = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]]
    });

  }





  ngOnInit(): void {

  }

  onSubmitAdd(){
    const name = this.formAdd.controls.nombre.value;
    const surname = this.formAdd.controls.apellido.value;
    const phone = this.formAdd.controls.celular.value;

    this._clienteService.createCliente(name,surname,phone).subscribe((data) =>{
      this._clienteService.emitUpdateClients();
      this.snack.open(data.msg ,'', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right', panelClass: ['add-snackbar']});

    })

  }

}
