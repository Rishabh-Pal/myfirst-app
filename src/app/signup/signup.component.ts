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
    this.userService.getAllTours("").subscribe((data) => {
      console.log(data);
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
