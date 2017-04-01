import { Component, OnInit } from '@angular/core';
import {Appeal, Car} from "../../../../model";
import {SocketService} from "../../../../_services/socket.service";
import {MainComponent} from "../../main.component";

@Component({
  selector: 'app-appeals',
  templateUrl: './appeals.component.html',
  styleUrls: ['./appeals.component.css']
})
export class AppealsComponent implements OnInit {

  appeals: Appeal[];
  filterEmail: string;
  filterStatus: string;
  filterCarNumber: string;

  constructor(
    private socket: SocketService,
    private mainComponent: MainComponent
  ) {}

  ngOnInit() {
    this.appeals = this.mainComponent.socketService.appeals;
  }

  accept(appeal: Appeal) {

  }

  reject(appeal: Appeal) {

  }

  isBanned(car: Car){
    if (car.status === 'Banned') {
      return '<br> Warning! This car is in Black List.';
    } else {
      return '';
    }
  }

}
