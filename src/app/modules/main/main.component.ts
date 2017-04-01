import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SocketService} from "../../_services/socket.service";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [
    SocketService
  ]
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private socketService: SocketService
  ) {}

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.socketService.connect();
  }

}
