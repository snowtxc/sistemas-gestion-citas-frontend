import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';



//Full calendar
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin
]);

import { AutocompleteLibModule } from 'angular-ng-autocomplete';



//Components
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/home/clientes/clientes.component';
import { AgendaComponent } from './components/home/agenda/agenda.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



//Modules
import { AngularMaterialModule } from '@modules/angular-material/angular-material.module'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    AgendaComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    FullCalendarModule,
    HttpClientModule
  ],
  exports: [
    AngularMaterialModule

  ],

  providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass:  AuthInterceptorService,
       multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
