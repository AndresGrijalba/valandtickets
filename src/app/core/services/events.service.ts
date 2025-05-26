import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { IEvent } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = '/assets/data-json/events.json';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.url);
  }

  getEventById(eventId: number): Observable<IEvent | undefined> {
    return this.getEvents().pipe(
      map(items => items.find(item => item.id === eventId))
    );
  }
}
