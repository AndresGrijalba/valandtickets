import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {EventService} from '../../core/services/events.service';
import {firstValueFrom} from 'rxjs';
import {IEvent} from '../../core/interfaces/event.interface';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-eventos',
  imports: [RouterLink, NgOptimizedImage, NgIf],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventsComponent implements OnInit {
  events: IEvent[] = [];
  filteredEvents: IEvent[] = [];

  filters = {
    category: '',
    month: '',
    maxPrice: null as number | null
  };

  constructor(private eventServices: EventService) {}

  async ngOnInit(): Promise<void> {
    await this.getEvents();
  }

  async getEvents(): Promise<void> {
    this.events = await firstValueFrom(this.eventServices.getEvents());
    this.filteredEvents = this.events;
  }

  applyFilters(): void {
    this.filteredEvents = this.events.filter(event => {
      const matchCategory = this.filters.category ? event.category === this.filters.category : true;
      const matchMonth = this.filters.month ? event.datec.startsWith(this.filters.month) : true;
      const matchPrice = this.filters.maxPrice ? Number(event.price) <= this.filters.maxPrice : true;
      return matchCategory && matchMonth && matchPrice;
    });
  }

  setCategory(category: string): void {
    this.filters.category = category;
    this.applyFilters();
  }

  setMonth(month: string): void {
    this.filters.month = month;
    this.applyFilters();
  }

  setPrice(max: number): void {
    this.filters.maxPrice = max;
    this.applyFilters();
  }

  resetFilters(): void {
    this.filters = { category: '', month: '', maxPrice: null };
    this.filteredEvents = this.events;
  }
}
