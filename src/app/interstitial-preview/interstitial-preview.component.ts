import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const googletag: any;

@Component({
  selector: 'app-interstitial-preview',
  standalone: true,
  templateUrl: './interstitial-preview.component.html',
  styleUrls: ['./interstitial-preview.component.css']
})
export class InterstitialPreviewComponent implements OnInit {

  adUnitPath = '';

  private interstitialSlot: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.adUnitPath = params['adUnit'];

      if (this.adUnitPath) {
        this.loadInterstitial();
      }
    });
  }

  loadInterstitial(): void {

    googletag.cmd.push(() => {

      this.interstitialSlot =
        googletag.defineOutOfPageSlot(
          this.adUnitPath,
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );

      if (!this.interstitialSlot) {
        alert('Unable to create interstitial slot');
        return;
      }

      this.interstitialSlot.addService(
        googletag.pubads()
      );

      googletag.display(this.interstitialSlot);
    });
  }
}