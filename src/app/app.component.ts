import {Component, OnInit} from '@angular/core';
import { EVENTS_DATA } from './core/constants/data-temporary'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'valandtickets';

  constructor() { }

  async ngOnInit() {
    console.log(EVENTS_DATA)
  }
}
