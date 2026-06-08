import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, NgxSpinnerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatButtonModule, MatToolbarModule, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private spinner: NgxSpinnerService,
    private http: HttpClient
  ) { }

  URLinfo: any;
  searchQuery: any;
  URLData: any;
  showTable: boolean = false;
  // apiurl = 'https://localhost:44328/api/Scrape?url=';
  apiurl = 'https://adtechapi2026.centralindia.cloudapp.azure.com/api/Scrape?url=';
  filteredData: any[] = [];
  urlFilteredData:any;
  keyParams: string[] = [];
  selectedReportDimension: string = '';


  getURLInfo() {
    this.spinner.show();
    this.URLData = null;
    this.http.get(this.apiurl + this.URLinfo)
      .subscribe({
        next: (data: any) => {
          this.URLData = data;
          console.log("Received URL Data:", this.URLData);
          //this.showTable = true;
          this.spinner.hide();
        },
        error: (error) => {
          console.error(error);
          this.spinner.hide();
        }
      });

  }

  SearchUrl() {
    this.spinner.show();
    // this.urlFilteredData = this.formatURLData(this.URLData);
    // console.log("Formatted URL Data for Search:", this.urlFilteredData);
    debugger;
    this.filteredData = this.URLData.response.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(this.searchQuery.toLowerCase());
    });
    if (this.filteredData.length > 0) {
      console.log("Filtered Data after the search query:", this.filteredData);
      const parsedUrl = new URL(this.filteredData[0].url);
      const params: any = {};
      parsedUrl.searchParams.forEach((value, key) => {
        params[key] = value;
        this.keyParams.push(key);
      });
      console.log(params);
      this.urlFilteredData = params;
      this.spinner.hide();
      this.showTable = true;
    } else {
      this.spinner.hide();
      this.showTable = false;
    }
    if (!this.filteredData) {
      this.filteredData = this.URLData.response;
      return;
    }

  }

  //format the URL data to JSON:

  addSelectedDimension(){
    debugger;
    console.log("Selected Report Dimension:", this.selectedReportDimension);
      console.log('Value:', this.urlFilteredData[this.selectedReportDimension]);

  }
  logout() { debugger;
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }

}



// vnepress net morewords com  grennwichmeantime   omio com  chrintianpost  com
