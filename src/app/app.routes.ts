import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'interstitial', loadComponent: () => import('./interstitial/interstitial.component').then(m => m.InterstitialComponent), canActivate: [authGuard] },
  { path: 'rewarded', loadComponent: () => import('./rewarded/rewarded.component').then(m => m.RewardedComponent), canActivate: [authGuard] },
  { path: 'interstitial-preview', loadComponent: () => import('./interstitial-preview/interstitial-preview.component').then(m => m.InterstitialPreviewComponent) },
  { path: '**', redirectTo: '' }
];
