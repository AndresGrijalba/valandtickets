import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    phone: '',
    terms: false
  };

  isLoading = false;
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(form: NgForm) {

    const userToSend = {
      name: this.user.name,
      lastname: this.user.lastname,
      email: this.user.email,
      password: this.user.password,
      address: this.user.address,
      phone: this.user.phone
    };

    if (this.user.password !== this.user.password_confirmation) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    if (form.invalid) {
      this.errorMessage = 'Por favor completa todos los campos requeridos';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.http.post<any>('http://localhost:5000/users', userToSend).subscribe({
      next: (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/login']);
        } else {
          this.login();
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.mensaje || 'Error en el registro';
        console.error('Error en registro:', err);
      }
    });
  }

  private login() {
    this.http.post<any>('http://localhost:5000/login', {
      email: this.user.email,
      password: this.user.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Registro exitoso, pero falló el inicio de sesión automático. Por favor inicia sesión manualmente.';
      }
    });
  }
}
