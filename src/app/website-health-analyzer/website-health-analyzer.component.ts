import { Component } from '@angular/core';
import { DashboardHeaderComponent } from "../shared/dashboard-header/dashboard-header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-website-health-analyzer',
  standalone: true,
  imports: [DashboardHeaderComponent, CommonModule,FormsModule],
  templateUrl: './website-health-analyzer.component.html',
  styleUrl: './website-health-analyzer.component.css'
})
export class WebsiteHealthAnalyzerComponent {
  navigateTo: any;
  websiteUrl: any = '';

  ngonInit(): void {
    // Implement initialization logic if needed, or leave empty }
  }
  analyzeWebsite() {

  }
}
