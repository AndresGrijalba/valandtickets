import { Component } from '@angular/core';
import {IUser} from '../../core/interfaces/user.interface';
import {EventService} from '../../core/services/events.service';
import {firstValueFrom} from 'rxjs';
import {UsersService} from '../../core/services/users.service';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class AccountComponent {
  users: IUser[] = [];

  constructor(private userServices: UsersService) {}

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  async getUsers(): Promise<void> {
    this.users = await firstValueFrom(this.userServices.getUsers());
  }
}
