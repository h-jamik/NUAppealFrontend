import { Component, OnInit } from '@angular/core';
import {Appeal, Car} from "../../../../model";

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
  constructor() { }

  ngOnInit() {

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
