import { Component } from '@angular/core';
import {EventService} from '../../../../../core/services/events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event',
  standalone: false,
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  categories: string[] = [
    'Concierto',
    'Deporte',
    'Teatro'
  ];

  newEvent: any = {
    title: '',
    datec: '',
    category: 'Concierto',
    day: '',
    month: '',
    date: '',
    year: '',
    site: '',
    city: '',
    price: 0
  };

  constructor(
    private eventService: EventService,
    protected router: Router

  ) {}

  onSubmit(_t4: any): void {
    this.eventService.addEvent(this.newEvent).subscribe({
      next: (res) => {
        alert(`Evento creado con ID: ${res.event_id}`);
        this.router.navigate(['/events', res.event_id]);
      },
      error: (err) => {
        console.error('Error:', err);
        alert(`Error: ${err.error.error || 'Verifica los datos'}`);
      }
    });
  }
}
