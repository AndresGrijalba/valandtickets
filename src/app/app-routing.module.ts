import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {InicioComponent} from './features/home/inicio.component';
import {EventsComponent} from './features/events/eventos.component';
import {AccountComponent} from './features/account/cuenta.component';
import {CategoriesComponent} from './features/categories/categorias.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent },
  { path: 'events', component: EventsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'categories', component: CategoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
