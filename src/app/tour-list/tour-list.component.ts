import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Tour, TourResponse } from './tour.model';

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css'],
})
export class TourListComponent implements OnInit {
  tours: Tour[] = [];
  sort: Sort[] = [
    { value: 'duration', viewValue: 'duration' },
    { value: 'difficulty', viewValue: 'difficulty' },
    { value: 'price', viewValue: 'price' },
    { value: 'ratingsAverage', viewValue: 'ratingsAverage' },
    { value: 'ratingsQuantity', viewValue: 'ratingsQuantity' },
    { value: 'maxGroupSize', viewValue: 'maxGroupSize' },
  ];
  query = '';
  sortvalue: string = '';
  searchname: string = '';
  selectedSort: string = '';
  constructor(
    private userService: UsersService,
    private cdr: ChangeDetectorRef
  ) {
    this.selectedSort = '';
  }

  private fetchResults() {
    this.query = `sort=${this.selectedSort}`;
    console.log('Fetching with Query:', this.query);
    this.userService
      .getAllTours(this.query)
      .subscribe((response: TourResponse) => {
        console.log('API Response:', response);
        if (
          response.status === 'success' &&
          response.data.tours &&
          localStorage.getItem('accessToken')
        ) {
          this.tours = response.data.tours;
        } else {
          console.error('Error in API response');
        }
      });
  }
  ngOnInit() {
    this.fetchResults();
  }
  onSortChange() {
    this.query = `sort=${this.selectedSort}`;
    this.fetchResults();
  }
  Search() {
    if (!this.searchname) {
      this.ngOnInit(); 
    } else {
      this.tours = this.tours.filter((tour) => {
        const name = tour.name ? tour.name.toLowerCase() : '';
        if(name.includes(this.searchname.toLowerCase()) ){
          return name.includes(this.searchname.toLowerCase());
        }else{
          return ;
        };
      });
    }
  }
}
