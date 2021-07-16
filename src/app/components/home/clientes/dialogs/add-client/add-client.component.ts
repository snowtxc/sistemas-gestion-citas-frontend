import { Component, OnInit } from '@angular/core';

import { FormGroup,Validators,FormBuilder } from '@angular/forms';





@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  public formAdd:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formAdd = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("^[0-9]*$")]]
    });       
    
  }





  ngOnInit(): void {
  
  }

  onSubmitAdd(){
    console.log('add');
  }

}
