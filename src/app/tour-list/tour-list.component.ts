import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Tour, TourResponse } from './tour.model';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit{
  tours: Tour[] = [];
  
  constructor(private userService: UsersService, private route: ActivatedRoute) {}

  ngOnInit() {
    const query = '';
    this.userService.getAllTours(query).subscribe((response: TourResponse) => {
      if (response.status === 'success' && response.data.tours && localStorage.getItem('accessToken')) {
        this.tours = response.data.tours;
        console.log(this.tours)
        // Now, this.tours array holds the mapped data from the API response
      } else {
        console.error('Error in API response');
      }
    });
  }
}
