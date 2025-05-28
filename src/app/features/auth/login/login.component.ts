// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginWithGoogle().then(() => {
      this.router.navigate(['/home']);
    }).catch(err => {
      console.error('Error al iniciar sesión', err);
    });
  }
}
