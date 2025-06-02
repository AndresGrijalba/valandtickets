import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { IEvent } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'http://127.0.0.1:5000/events';

  constructor(private http: HttpClient) {}

  addEvent(eventData: any): Observable<any> {
    return this.http.post(this.url, eventData);
  }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.url);
  }

  getEventById(eventId: number): Observable<IEvent | undefined> {
    return this.getEvents().pipe(
      map(items => items.find(item => item.id === eventId))
    );
  }

  getEventsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.url}/${category}`);
  }
}
