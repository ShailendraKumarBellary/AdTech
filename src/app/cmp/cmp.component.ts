import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp',
  standalone: true,
  imports: [],
  templateUrl: './cmp.component.html',
  styleUrl: './cmp.component.css'
})
export class CmpComponent {



  constructor(private router: Router) { }

    ngOnInit() {
    console.log('CMP Component initialized');
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
