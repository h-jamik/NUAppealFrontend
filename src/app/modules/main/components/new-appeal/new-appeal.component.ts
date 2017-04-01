import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {Appeal} from '../../../../model';
import {ApplicationRef_} from "@angular/core/src/application_ref";

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
  errors: boolean[];
  constructor() {
  }

  ngOnInit() {
    this.appeal = new Appeal();
    this.whoiscoming = '';
    this.errors = [];
  }

  submit() {
    console.log(this.arrivalTime);
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
  }

}
