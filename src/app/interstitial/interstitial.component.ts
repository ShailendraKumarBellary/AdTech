import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';

declare const googletag: any;

@Component({
  selector: 'app-interstitial',
  standalone: true,
  imports: [NgxSpinnerModule, FormsModule, CommonModule,MatCheckboxModule],
  templateUrl: './interstitial.component.html',
  styleUrl: './interstitial.component.css'
})
export class InterstitialComponent implements OnInit, OnDestroy {
  adUnitPath: string = '';
  loading: boolean = false;
  private interstitialSlot: any;
  private adLoaded: boolean = false;
  isLoading: boolean = false;
  targetingPairs = [{ key: '', value: '' }];
  selectedDevice = 'mobile';
  enableViewports: boolean = false;

  deviceConfigs: any = {
    tablet: {
      label: 'Tablet',
      width: 768,
      height: 1024
    },
    mobile: {
      label: 'Mobile',
      width: 390,
      height: 844
    }
  };

  get currentDevice() {
    return this.deviceConfigs[this.selectedDevice];
  }

  constructor(private router: Router) { }
  ngOnInit(): void {
    // Implement initialization logic if needed, or leave empty
  }

  ngOnDestroy(): void {
    if (this.interstitialSlot && typeof googletag !== 'undefined') {
      googletag.cmd.push(() => {
        googletag.destroySlots([this.interstitialSlot]);
      });
    }
  }

  testInterstitial(): void {
    this.isLoading = true;
    if (!this.adUnitPath.trim()) {
      alert('Please enter a valid ad unit path.');
      return;
    }

    this.loading = true;
    this.loadInterstitialAd(this.adUnitPath.trim());
  }

  reset(): void {
    window.location.reload();
  }

  addTargetingRow() {
    this.targetingPairs.push({
      key: '',
      value: ''
    });
  }

  private loadInterstitialAd(adUnitPath: string): void {
    this.adLoaded = false;
    googletag.cmd.push(() => {
      if (this.interstitialSlot) {
        googletag.destroySlots([this.interstitialSlot]);
      }

      this.interstitialSlot = googletag.defineOutOfPageSlot(adUnitPath, googletag.enums.OutOfPageFormat.INTERSTITIAL);
      if (!this.interstitialSlot) {
        this.loading = false;
        alert('Failed to create interstitial slot. Please check the ad unit path and try again.');
        return;
      }
      this.interstitialSlot.addService(googletag.pubads()).setConfig({ interstitial: { triggers: { navBar: false } } });
      this.targetingPairs.forEach(pair => {
        const key = pair.key?.trim();
        const value = pair.value?.trim();

        if (key && value) {
          googletag.pubads().setTargeting(key, value);
        }
      });
      googletag.pubads().addEventListener('slotOnload', (event: any) => {
        if (event.slot === this.interstitialSlot) {
          this.adLoaded = true;

          setTimeout(() => {
            this.loading = false;
          }, 15000);
        }
      });
      googletag.enableServices();
      googletag.display(this.interstitialSlot);
      setTimeout(() => {
        if (!this.adLoaded) {
          this.loading = false;
          alert('Ad failed to load within the expected time. Please try again.');
        }
      }, 10000);
    });
  }
  openTestWindow(): void {

    if (!this.adUnitPath?.trim()) {
      alert('Please enter Ad Unit Path');
      return;
    }

    const device = this.currentDevice;

    const targeting = encodeURIComponent(
      JSON.stringify(this.targetingPairs)
    );

    const adUnit = encodeURIComponent(this.adUnitPath);

    window.open(
      `/interstitial-preview?adUnit=${adUnit}&targeting=${targeting}`,
      '_blank',
      `width=${device.width},
     height=${device.height},
     resizable=yes,
     scrollbars=yes`
    );
  }

  resetTester(): void {
    window.location.reload();
  }


  navigateTo(view: string): void {
    if (view === 'home') {
      this.router.navigate(['/home']);
    } else if (view === 'interstitial') {
      this.router.navigate(['/interstitial']);
    } else if (view === 'rewarded') {
      this.router.navigate(['/rewarded']);
    } else if (view === 'cmp') {
      this.router.navigate(['/cmp']);
    }
  }

}