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
    if (this.tour.imageCover) {
      const formData = new FormData();
      formData.append('imageCover', this.tour.imageCover);

      // Upload the image to your server
      this.userService.uploadImage(formData).subscribe(
        (imageUploadResponse) => {
          // Assuming the server returns the image URL in the response
          this.tour.imageCover = imageUploadResponse.imageURL;

          // Continue with tour creation
          this.createTour();
        },
        (imageUploadError) => {
          console.error('Error uploading image:', imageUploadError);
        }
      );
    }
  }

  onFileSelected(event: any) {
    this.tour.imageCover = event.target.files[0];
  }

  createTour() {
    this.userService.createTour(this.tour).subscribe(
      (response) => {
        console.log('Tour created:', response);
        // Optionally, you can handle the response or navigate to a different page
      }
    );
  }
}
