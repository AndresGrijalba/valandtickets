import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { EventService } from '../../core/services/events.service';
import { IEvent } from '../../core/interfaces/event.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private _eventService: EventService ) {}

  async ngOnInit() {
    await this.getEvents();
  }

  async getEvents(): Promise<void> {
    this.events = await firstValueFrom(this._eventService.getEvents());
  }
}
