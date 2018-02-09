import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log("Login : ", this.model);
    if(this.model.username == "manish" && this.model.password == "123456") {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
