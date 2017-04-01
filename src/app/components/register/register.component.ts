import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../_services/authentication.service";

import {User} from "../../model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    AuthenticationService
  ]
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  password: string;

  constructor(
    private service: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    this.password = '';
  }

  register() {
    if (this.password != this.user.password) {
      return;
    }

    this.service.register(this.user).subscribe(
      succ => {
        this.router.navigate(['/login']);
    }, err => {
    });
  }

}
