import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {IEvent} from '../../../../../core/interfaces/event.interface';
import {EventService} from '../../../../../core/services/events.service';
import {firstValueFrom} from 'rxjs';
import {NgIf} from '@angular/common';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-infoeventos',
  imports: [NgIf, RouterLink],
  templateUrl: './infoeventos.component.html',
  styleUrl: './infoeventos.component.css'
})
export class InfoEventsComponent implements OnInit {
  event: IEvent | undefined;
  constructor(
    private _eventServices: EventService,
    private _activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
  }

  getSafeMapUrl(): SafeResourceUrl | null {
    if (!this.event?.map) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.event.map);
  }

  async ngOnInit(): Promise<void> {
    await this.getEvent();
  }

  async getEvent(): Promise<void> {
    const eventId = +this._activatedRoute.snapshot.params['id'];
    this.event = await firstValueFrom(this._eventServices.getEventById(eventId));
  }
}
