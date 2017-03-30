import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  signin() {
    console.log ("login ", this.login, this.password);
    if (this.login == 'admin' && this.password == '123') {
      this.router.navigate(['/main']);
      console.log("here");
    }
  }

}
