import { Component, OnInit } from '@angular/core';
import {Appeal} from "../../../../model";

@Component({
  selector: 'app-appeals',
  templateUrl: './appeals.component.html',
  styleUrls: ['./appeals.component.css']
})
export class AppealsComponent implements OnInit {
  appeals: Appeal[];
  constructor() { }

  ngOnInit() {

  }

  accept() {

  }

  reject() {

  }

}
