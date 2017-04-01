import { Component, OnInit } from '@angular/core';
import {Car} from "../../../../model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  filterCarNumber: string;
  filterStatus: string;
  constructor() { }

  ngOnInit() {
  }

  unBan(car: Car) {

  }

  ban(car: Car) {

  }

  filter() {

  }

}
