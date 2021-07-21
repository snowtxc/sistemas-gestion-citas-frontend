import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import  {FormsModule} from "@angular/forms";


import { HomeRoutingModule } from './home-routing.module';
import { AngularMaterialModule } from '@modules/angular-material/angular-material.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


//Client dialog
import { AddClientComponent } from './clientes/dialogs/add-client/add-client.component';
import { DeleteClienteComponent } from './clientes/dialogs/delete-cliente/delete-cliente.component';
import { EditClienteComponent } from './clientes/dialogs/edit-cliente/edit-cliente.component';
import { ViewDetailClienteComponent } from './clientes/dialogs/view-detail-cliente/view-detail-cliente.component';

//Cita dialog
import { AddCitaComponent } from './agenda/dialogs/add-cita/add-cita.component';
import { EditCitaComponent } from './agenda/dialogs/edit-cita/edit-cita.component';
import { DeleteCitaComponent } from './agenda/dialogs/delete-cita/delete-cita.component';
import { ViewCitaComponent } from './agenda/dialogs/view-cita/view-cita.component';


import { NgSelectModule } from '@ng-select/ng-select';




 

  
@NgModule({
  declarations: [AddClientComponent, DeleteClienteComponent, EditClienteComponent, ViewDetailClienteComponent, AddCitaComponent, EditCitaComponent, DeleteCitaComponent, ViewCitaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
    AngularMaterialModule,
    AutocompleteLibModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgSelectModule

  ],
  exports: [
    AngularMaterialModule,
    AutocompleteLibModule,
    NgSelectModule    
  ]
})
export class HomeModule { }
