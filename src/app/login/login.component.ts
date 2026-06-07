import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  onLogin() {
    this.errorMessage = ''; // Clear previous errors

    // Basic required validation
    if (!this.credentials.username || !this.credentials.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    // Temporary Hardcoded UI Validation
    if (this.credentials.username === 'admin' && this.credentials.password === 'admin123') {
      
      // Simulating a successful login save state
      localStorage.setItem('isLoggedIn', 'true');
      
      // Navigate directly to your dashboard component route
      this.router.navigate(['/home']); 
      
    } else {
      // Failed login message
      this.errorMessage = 'Invalid username or password. Please try again.';
    }
  }
}