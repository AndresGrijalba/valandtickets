import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'valandtickets';

  constructor(public router: Router) { }
  hideHeaderRoutes = ['/terms', '/create-event', '/management-event'];

  shouldShowHeader(): boolean {
    return !this.hideHeaderRoutes.includes(this.router.url);
  }

  async ngOnInit() {
  }
}
