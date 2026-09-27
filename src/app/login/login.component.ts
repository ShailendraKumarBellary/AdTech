import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  // Model to bind form data
  credentials = {
    username: '',
    password: ''
  };

  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    this.errorMessage = ''; // Clear previous errors

    // Basic required validation
    if (!this.credentials.username || !this.credentials.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.http.post(`${environment.apiUrl}/Auth/login`, this.credentials).subscribe((response: any) => {
      if(response && response.token) { debugger
        // Store the token in local storage or a service for future requests
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/home']); 
      }
    })
  }
}