import {Component, OnInit} from '@angular/core';
import {Appeal} from '../../../../model';


@Component({
  selector: 'app-new-appeal',
  templateUrl: './new-appeal.component.html',
  styleUrls: ['./new-appeal.component.css']
})
export class NewAppealComponent implements OnInit {
  whoiscoming: string;
  appeal: Appeal;
  carNumber: string;
  arrivalDate: string;
  arrivalTime: string;
  appealType: string;
  errors: boolean[];
  constructor() {
  }

  ngOnInit() {
    this.appeal = new Appeal();
    this.whoiscoming = '';
    this.errors = [];
  }

  submit() {
    for (let i = 0; i < 8; i++) {
      this.errors[i] = false;
    }
    let ok = true;
    if (!this.whoiscoming) { this.errors[0] = true; }
    if (this.whoiscoming === 'Others' && !this.appeal.note) { this.errors[1] = true; }
    if (this.whoiscoming === 'Others' && !this.carNumber) { this.errors[2] = true; }
    if (!this.arrivalDate) { this.errors[4] = true; }
    if (!this.errors[4] && Date.parse(this.arrivalDate) === NaN) { this.errors[5] = true; }
    if (!this.arrivalTime) { this.errors[6] = true; }
    if (!this.errors[6] && Date.parse('2017-04-01 ' + this.arrivalTime) === NaN) {this.errors[7] = true; }
    for (let i = 0; i < 8; i++) {
      ok = ok && !this.errors[i];
    }
    if (!ok) {
      return;
    }
    this.appeal.arrival_time = new Date(this.arrivalDate + ' ' + this.arrivalTime);

    if (this.whoiscoming === 'Ambulance') {
      this.appeal.car_number = 'AMB-103-00';
    } else if (this.whoiscoming === 'Police') {
      this.appeal.car_number = 'POL-102-00';
    } else if (this.whoiscoming === 'Firefighters') {
      this.appeal.car_number = 'FIR-101-00';
    } else {
      this.appeal.car_number = this.carNumber;
    }
  }





}
