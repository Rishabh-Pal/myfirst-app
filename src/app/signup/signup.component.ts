import { Component } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService: UsersService) {}
  ngOnInit() {
    let query = '';
    this.userService.getAllTours(query).subscribe((response) => {
      console.log(response);
    });
  }
  submitData(value: any) {
    let body = {
      email: value.email,
      password: value.password,
    };
    console.log(value)
    this.userService.Signup(body).subscribe((response) => {
      console.log(response);
    });
  }
}
