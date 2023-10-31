import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
    this.userService.Login(body).subscribe((response) => {
      console.log(response);
    });
  }
}
