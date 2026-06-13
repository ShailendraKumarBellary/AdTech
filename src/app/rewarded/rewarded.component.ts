import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewarded',
  standalone: true,
  imports: [],
  templateUrl: './rewarded.component.html',
  styleUrl: './rewarded.component.css'
})
export class RewardedComponent {

  constructor(private router: Router) { }


  ngOnInit(): void {
    // Implement initialization logic if needed, or leave empty
  }







  navigateTo(view: string): void {
    if (view === 'home') {
      this.router.navigate(['/home']);
    } else if (view === 'interstitial') {
      this.router.navigate(['/interstitial']);
    } else if (view === 'rewarded') {
      this.router.navigate(['/rewarded']);
    }
  }

}
