import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthenticationService } from '@services/authentication/authentication.service';

import { Router } from "@angular/router";

//Angular material
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;



  constructor(private fb:FormBuilder,private _auth:AuthenticationService,private _router:Router,private _snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }


  onSubmitLogin(){

    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this._auth.login(email,password).subscribe(() =>{
      this._router.navigate(['home']);

    },
    err =>{
      this._snackBar.open(err,'Undo', {
        duration: 3000
      });
    })




  }



}
