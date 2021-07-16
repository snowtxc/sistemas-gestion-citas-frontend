import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from '@components/login/login.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home',  loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
