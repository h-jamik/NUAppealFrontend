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
    private sailsService: SailsService
  ) {}

  ngOnInit() {


    //console.log("sails ", this.sailsService);
    //this.sailsService.connect();
    //console.log("sails ", this.sailsService);

    this.sailsService.connect('http://localhost:1337').subscribe(res => {
      console.log("connected! ", res);
    }, err => {
      console.log("error! ", err);
    });

    this.sailsService.on('hello').subscribe( data => {
      console.log('Socket `' + data.id + '` joined the party!');
    });

    /*io.socket.on('hello', function (data) {
      console.log('Socket `' + data.id + '` joined the party!');
    });*/

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  signin() {



    this.sailsService.get('/appeal/myfunctest').subscribe(resp => {
      console.log("resp ", resp);
    });

    /*if (this.email != '' && this.password != '') {
      this.service.login(this.email, this.password).subscribe(res => {
        if (res.user && res.token) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.router.navigate(['/main']);
        } else {
          this.error = false;
        }
      }, err => {
        this.error = true;
      });
    }*/
  }

}
