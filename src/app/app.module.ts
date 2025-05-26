import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InicioComponent} from "./features/home/inicio.component";
import {HttpClientModule} from '@angular/common/http';
import { PositionselectorComponent } from './features/positionselector/positionselector.component';
import { TerminosComponent } from './features/terms/terminos.component';
import { RegisterComponent } from './features/register/register.component';
import { CreateEventComponent } from './features/events/components/management-events/create-event/create-event.component';
import {SharedModule} from './shared/shared.module';
import {ManagementEventComponent} from './features/events/components/management-events/management-event/management-event.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionselectorComponent,
    TerminosComponent,
    RegisterComponent,
    CreateEventComponent,
    ManagementEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InicioComponent,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
