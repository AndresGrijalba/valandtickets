import {Component, OnInit} from '@angular/core';
import {IEvent} from '../../../../../core/interfaces/event.interface';
import {EventService} from '../../../../../core/services/events.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-management-event',
  standalone: false,
  templateUrl: './management-event.component.html',
  styleUrl: './management-event.component.css'
})
export class ManagementEventComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private _eventService: EventService ) {}

  async ngOnInit() {
    await this.getEvents();
  }

  async getEvents(): Promise<void> {
    this.events = await firstValueFrom(this._eventService.getEvents());
  }
}
