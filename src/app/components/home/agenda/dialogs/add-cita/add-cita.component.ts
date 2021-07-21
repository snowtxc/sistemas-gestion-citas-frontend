import { Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


//Interfaces
import { ClientData } from 'src/app/interfaces/Client';


@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {

  clientes:ClientData []=  [
    { id: 2, nombre: 'Manuela', apellido: 'Romero', celular: '092365444' },
    { id: 3, nombre: 'Jesus', apellido: 'Ferreira', celular: '092365444' },
    { id: 4, nombre: 'Maria', apellido: 'Nieves', celular: '092365444' },
    { id: 5, nombre: 'Homero', apellido: 'Simpson', celular: '092365444' },
    { id: 6, nombre: 'Horacio', apellido: 'Quiroga', celular: '092365444' }

  ];
    

  selectedCliente= [
    { id: 5, nombre: 'Homero', apellido: 'Simpson', celular: '092365444' }
  ];

  searchable:string = 'true';


  public formAdd:FormGroup;

  
  constructor(private fb:FormBuilder) { 
    this.formAdd = this.fb.group({
      cliente: ['',Validators.required],
      title: ['',Validators.required],
      motivo: ['',Validators.required],
      fecha_hora: ['',Validators.required]
      
    })
    
    
  }

  ngOnInit(): void {
    
  }

 

  getClientes(){
    this.clientes = [
     
    ];
  }

  onSubmitAdd(){
    console.log("form");

  }




 
  
}
