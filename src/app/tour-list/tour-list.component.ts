import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Tour, TourResponse } from './tour.model';
import { ActivatedRoute, NavigationEnd, Router  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit{
  tours: Tour[] = [];
  query='';
  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((data) => {
      this.query = this.objectToQueryString(data);
      this.fetchResults();
    });

    // Listen to route changes using NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.fetchResults();
    });
  }
  objectToQueryString(obj: any) {
    const keyValuePairs = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        keyValuePairs.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
  
    return keyValuePairs.join('&');
  }
  
  private fetchResults() {
    this.userService.getAllTours(this.query).subscribe((response: TourResponse) => {
      if (response.status === 'success' && response.data.tours && localStorage.getItem('accessToken')) {
        this.tours = response.data.tours;
      } else {
        console.error('Error in API response');
      }
    });
  }

  ngOnInit() {
    this.fetchResults();
  }
  searchWithQuery() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sort: this.query },
      queryParamsHandling: 'merge'
    });
  }
}
