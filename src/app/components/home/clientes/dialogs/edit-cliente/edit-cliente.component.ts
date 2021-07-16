import { Component, OnInit , Inject } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';




import { ClientData } from 'src/app/interfaces/Client';

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

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public client_data: ClientData) {
    this.id = client_data.id;
    this.nombre = client_data.nombre;
    this.apellido = client_data.apellido;
    this.celular = client_data.celular;

    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]]
    });

   }


  ngOnInit(): void {
    
  }

  onSubmitEdit(){

    
  }

  


}
