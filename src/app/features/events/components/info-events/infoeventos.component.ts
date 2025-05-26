import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../../../../core/interfaces/event.interface';
import {EventService} from '../../../../core/services/events.service';
import {firstValueFrom} from 'rxjs';
import {NgForOf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-infoeventos',
  imports: [NgOptimizedImage, NgForOf],
  templateUrl: './infoeventos.component.html',
  styleUrl: './infoeventos.component.css'
})
export class InfoEventsComponent implements OnInit {
  event: IEvent | undefined;
  constructor(
    private _eventServices: EventService,
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getEvent();
  }

  async getEvent(): Promise<void> {
    const eventId = +this._activatedRoute.snapshot.params['id'];
    this.event = await firstValueFrom(this._eventServices.getEventById(eventId));
    console.log(this.event);
  }
}
