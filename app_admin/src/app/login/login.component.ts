import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: User & { password: string } = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.logout();

    this.authService.login(
      {
        name: this.credentials.name,
        email: this.credentials.email
      },
      this.credentials.password
    );

    setTimeout(() => {
      if (this.authService.isLoggedIn()) {
        this.router.navigateByUrl('/');
      } else {
        alert('Login failed. Check your email or password.');
      }
    }, 500);
  }
}