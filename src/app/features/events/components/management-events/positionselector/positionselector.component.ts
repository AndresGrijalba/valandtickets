import {Component, OnInit} from '@angular/core';
import {firstValueFrom} from 'rxjs';
import {IEvent} from '../../../../../core/interfaces/event.interface';
import {EventService} from '../../../../../core/services/events.service';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-positionselector',
  standalone: false,
  templateUrl: './positionselector.component.html',
  styleUrl: './positionselector.component.css'
})
export class PositionselectorComponent implements OnInit {
  event: IEvent | undefined;
  constructor(
    private _eventServices: EventService,
    private _activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
  }
  async ngOnInit(): Promise<void> {
    await this.getEvent();
  }

  async getEvent(): Promise<void> {
    const eventId = +this._activatedRoute.snapshot.params['id'];
    this.event = await firstValueFrom(this._eventServices.getEventById(eventId));
  }
}


