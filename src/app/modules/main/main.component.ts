import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SocketService} from "../../_services/socket.service";
import {User} from "../../model";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [
    SocketService
  ]
})
export class MainComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    public socketService: SocketService
  ) {}

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.socketService.connect();

    let tmp = localStorage.getItem('user');
    if (tmp) this.user = <User> JSON.parse(tmp);
  }

}
