import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {SideBarComponent} from './components/side-bar/side-bar.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

const components = [
  FooterComponent,
  HeaderComponent,
  SideBarComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: components
})
export class SharedModule { }
