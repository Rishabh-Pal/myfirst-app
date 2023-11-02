import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.css']
})
export class CreateTourComponent {
  tour: any = {
    imageCover: '',
    name: '',
    description: '',
    maxGroupSize: null,
    difficulty: '',
    summary:'',
    price: null,
    duration: null
  };
  constructor(private userService: UsersService) {}
  onSubmit(event: Event) {
    // console.log('Tour data submitted:', this.tour);
    // event.preventDefault();
    // this.userService.createTour(this.tour).subscribe(
    //   (response) => {
    //     console.log('Tour created:', response);
    //   }
    // );
    this.createTour();
  }


  createTour() {
    this.userService.createTour(this.tour).subscribe(
      (response) => {
        console.log('Tour created:', response);
      }
    );
  }
}
