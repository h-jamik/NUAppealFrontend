import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../../_services/authentication.service";
import {SailsService} from "angular2-sails";
declare var io: any;

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    AuthenticationService
  ]
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  error: boolean = false;

  constructor(
    private router: Router,
    private service: AuthenticationService,
    private socket: SailsService
  ) {}

  ngOnInit() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  signin() {

    if (this.email != '' && this.password != '') {
      this.service.login(this.email, this.password).subscribe(res => {
        if (res.user && res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));

          this.connectSocket();

          this.router.navigate(['/main']);

        } else {
          this.error = false;
        }
      }, err => {
        this.error = true;
      });
    }
  }

  connectSocket() {
    let options = {
      url: 'http://localhost:1337',
      headers: {Authorization: "Bearer "+localStorage.getItem("token")}
    };

    this.socket.connect(options).subscribe(res => {
      console.log("connected! ", res);

      this.socket.get('/authentication/subscribeUser').subscribe(resp => {
        console.log("resp ", resp);
      });

    }, err => {
      console.log("error! ", err);
    });


    // this.socket.on("hello").subscribe(res => {
    //   console.log("hello! ", res);
    // });
  }

}
