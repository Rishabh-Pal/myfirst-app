import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UsersService) {}
  ngOnInit() {
    // this.userService.getAllTours("").subscribe((data) => {
    //   console.log(data);
    // });
  }
  submitData(value: any) {
    let body = {
      email: value.email,
      password: value.password,
    };
    console.log(value);
    this.userService.Login(body).subscribe((response) => {
      console.log(response);
      if (response.status === 'success' && response.token) {
        localStorage.setItem('accessToken', response.token);
        // Redirect to another page or perform other actions upon successful login
      } else {
        console.error('Token not found in response');
        // Handle this case accordingly (e.g., show an error message)
      }
    });
  }
}
