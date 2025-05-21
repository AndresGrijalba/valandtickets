import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
