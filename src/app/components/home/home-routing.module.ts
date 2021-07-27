import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from '@components/home/home.component';
import { ClientesComponent } from '@components/home/clientes/clientes.component';
import { AgendaComponent } from '@components/home/agenda/agenda.component';

//Guard

import { IsLoggedGuard } from 'src/app/guards/is-logged.guard';

const routes: Routes = [
  {path: '', component: HomeComponent,canActivate: [IsLoggedGuard], children: [
    {path: '', redirectTo: 'clientes',pathMatch: 'full'},
    { path: 'clientes', component: ClientesComponent },
    { path: 'agenda', component: AgendaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
