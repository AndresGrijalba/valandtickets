import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {InicioComponent} from "./features/home/inicio.component";
import {HttpClientModule} from '@angular/common/http';
import { PositionselectorComponent } from './features/events/components/management-events/positionselector/positionselector.component';
import { TerminosComponent } from './features/terms/terminos.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { CreateEventComponent } from './features/events/components/management-events/create-event/create-event.component';
import {SharedModule} from './shared/shared.module';
import {ManagementEventComponent} from './features/events/components/management-events/management-event/management-event.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './features/auth/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    PositionselectorComponent,
    TerminosComponent,
    RegisterComponent,
    CreateEventComponent,
    ManagementEventComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InicioComponent,
    SharedModule,
    LoginModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
