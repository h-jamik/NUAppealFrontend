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
  errors: boolean[];
  constructor(
    private service: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new User();
    this.password = '';
    this.errors = [];
  }

  register() {
    for (let i = 0; i < 10; i++) {
      this.errors[i] = false;
    }
    let ok = true;
    if (!this.user.firstname) {this.errors[0] = true; }
    if (!this.user.lastname) {this.errors[1] = true; }
    if (!this.user.email) {this.errors[2] = true; }
    if (!this.user.nuid) {this.errors[3] = true; }
    if (!this.user.password) {this.errors[4] = true; }
    if (!this.password) {this.errors[5] = true; }
    if (!this.errors[2] && !this.user.email.endsWith('@nu.edu.kz')) {this.errors[6] = true; }
    if (!this.errors[3] && (this.user.nuid.length !== 9 || Number(this.user.nuid) === NaN)) {this.errors[8] = true; }
    if (!this.errors[4] && !this.errors[5] && this.password !== this.user.password) {this.errors[9] = true; }
    for (let i = 0; i < 10; i++) {
      ok = ok && (!this.errors[i]);
    }
    if (!ok) {
      return;
    }


    this.service.register(this.user).subscribe(
      succ => {
        this.router.navigate(['/login']);
    }, err => {
    });
  }
}
