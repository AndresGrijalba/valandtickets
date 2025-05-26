import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './features/login/login.component';
import {InicioComponent} from './features/home/inicio.component';
import {EventsComponent} from './features/events/eventos.component';
import {AccountComponent} from './features/account/cuenta.component';
import {CategoriesComponent} from './features/categories/categorias.component';
import {InfoEventsComponent} from './features/events/components/info-events/infoeventos.component';
import {PositionselectorComponent} from './features/positionselector/positionselector.component';
import {TerminosComponent} from './features/terms/terminos.component';
import {RegisterComponent} from './features/register/register.component';
import {CreateEventComponent} from './features/events/components/management-events/create-event/create-event.component';
import {ManagementEventComponent} from './features/events/components/management-events/management-event/management-event.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent },
  { path: 'events', component: EventsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'info-events', component: InfoEventsComponent },
  { path: 'info-events/:id', component: InfoEventsComponent },
  { path: 'selector', component: PositionselectorComponent},
  { path: 'terms', component: TerminosComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'management-event', component: ManagementEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
