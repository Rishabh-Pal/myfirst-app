import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myfirst-app';
  constructor(private userService: UsersService) {}
  ngOnInit() {
    this.userService.getAllData().subscribe((data) => {
      console.log(data);
    });
  }
  
  submitData(value: any) {
    let body = {
      name: value.name,
      age: value.age,
    };
    console.log(value)
    this.userService.postData(body).subscribe((response) => {
      console.log(response);
    });
  }
  updateData(value: any) {
    let body = {
      name: value.name,
      age: value.age,
    };
    console.log(body)
    this.userService.updateData(body,"652677dafb97dc5ce628e706").subscribe((response) => {
        console.log(response)
      })
  }
  deleteData(){
    this.userService.deleteData("652668c75dfa5c1d28a29969").subscribe(response => {
      console.log(response)
    })
  }
}
