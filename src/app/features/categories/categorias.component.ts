import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriesComponent {
  categories = [
    { name: 'Concierto', displayName: 'Conciertos' },
    { name: 'Deporte', displayName: 'Deportes' },
    { name: 'Teatro', displayName: 'Teatros' }
  ];

  constructor(private router: Router) {}

  viewEvents(category: string): void {
    this.router.navigate(['/events'], { queryParams: { category } });
  }
}
