import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-noty',
  templateUrl: 'noty.component.html',
  styleUrls: ['noty.component.css']
})
export class NotyComponent implements OnInit {

  @Input('name')
  name: string;

  @Input('text')
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
