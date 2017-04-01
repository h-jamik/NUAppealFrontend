import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  filterUserId: string;
  filterName: string;
  filterRole: string;
  constructor() { }

  ngOnInit() {
  }

  makeUser(user: User) {
    user.role = 'User';
  }

  makeModerator(user: User) {
    user.role = 'Moderator';
  }
  filter() {

  }
}
