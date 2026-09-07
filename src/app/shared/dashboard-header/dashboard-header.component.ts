import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent {
  constructor(private router: Router) { }
    currentView: 'home' | 'webHealth' | 'interstitial' | 'rewarded' = 'home';

  navigateTo(view: 'home' | 'webHealth' | 'interstitial' | 'rewarded'): void {
    this.currentView = view;
    if (view === 'home') {
      this.router.navigate(['/home']);
    } else if (view === 'interstitial') {
      this.router.navigate(['/interstitial']);
    } else if (view === 'rewarded') {
      this.router.navigate(['/rewarded']);
    } else if (view === 'webHealth') {
      this.router.navigate(['/webHealth']);
    }
  }
    logout() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

}
