import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EventService} from '../../core/services/events.service';
import {firstValueFrom} from 'rxjs';
import {IEvent} from '../../core/interfaces/event.interface';

@Component({
  selector: 'app-eventos',
  imports: [RouterLink],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventsComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private eventServices: EventService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getEvents();
  }

  async getEvents(): Promise<void> {
    this.events = await firstValueFrom(this.eventServices.getEvents());
  }
}
