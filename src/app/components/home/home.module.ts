import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import  {FormsModule} from "@angular/forms";


import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '@modules/angular-material/angular-material.module';
import { AddClientComponent } from './clientes/dialogs/add-client/add-client.component';
import { DeleteClienteComponent } from './clientes/dialogs/delete-cliente/delete-cliente.component';
import { EditClienteComponent } from './clientes/dialogs/edit-cliente/edit-cliente.component';
import { ViewDetailClienteComponent } from './clientes/dialogs/view-detail-cliente/view-detail-cliente.component';


//Dialog

@NgModule({
  declarations: [AddClientComponent, DeleteClienteComponent, EditClienteComponent, ViewDetailClienteComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule
  ]
})
export class HomeModule { }
