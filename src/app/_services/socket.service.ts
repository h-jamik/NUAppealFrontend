import { Injectable } from '@angular/core';
import {SailsService} from "angular2-sails";
import {Observable} from "rxjs/Observable";
import {User, Appeal, Car} from "../model";

@Injectable()
export class SocketService {

  public appeals: Appeal[];
  public users: User[];
  public cars: Car[];

  public timer: any;

  constructor(private service: SailsService) { }

  connect() {

    if (this.timer) return;

    this.timer = Observable.timer(0, 60000);

    this.timer.subscribe(() => {

      let token = localStorage.getItem('token');

      if (token && token.length > 0) {
        let options = {
          url: 'http://localhost:1337',
          headers: {Authorization: "Bearer "+localStorage.getItem("token")}
        };

        this.service.connect(options).subscribe(res => {
          console.log("connected! ", res);

          this.service.get('/user/subscribeUser').subscribe(resp => {
            this.subscr();
            this.init();
          });

        }, err => {
          console.log("error! ", err);
        });
      }
    });
  }

  subscr() {

    if (!localStorage.getItem('user')) return;

    let user = <User> JSON.parse(localStorage.getItem('user'));

    if (user.role == 'client') {
      this.service.on('user').subscribe(event => {

        console.log("client received ", event);

        switch (event.verb) {
          case 'addedTo':
            this.appeals.unshift(new Appeal(event.added.appeal));
            break;
          case 'updated':
            //let appeal = this.appeals.find(t => t.id == event.updated.appeal);
            break;
          default:
            console.warn('Unrecognized socket event (`%s`) from server:', event.verb, event);
        }
      });
    }

    if (user.role == 'moderator' || user.role == 'admin') {
      this.service.on('appeal').subscribe(resp => {
        console.log("moderator/admin received appeal ", resp);
      });

      this.service.on('car').subscribe(resp => {
        console.log("moderator/admin received car ", resp);
      });
    }

    if (user.role == 'admin') {
      this.service.on('user').subscribe(resp => {
        console.log("admin received user ", resp);
      });
    }

    console.log("SUBSCRIBING DONE!");
  }

  init() {

    if (!localStorage.getItem('user')) return;

    let user = <User> JSON.parse(localStorage.getItem('user'));

    console.log("user ", user);

    if (user.role == 'client') {
      this.service.get('/user/getClientAppealsPopulated').subscribe(items => {

        this.appeals = [];
        if (items.data.appeals_client)
          for (let i of items.data.appeals_client)
            this.appeals.push(new Appeal(i));

      });
    }

    if (user.role == 'moderator' || user.role == 'admin') {

      this.service.get('/user/getModeratorAppealsPopulated').subscribe(items => {

        console.log("Moderator/Admin received list of appeals ", items);

        this.appeals = [];
        if (items)
          for (let i of items)
            this.appeals.push(new Appeal(i));
      });

      this.service.get('/car/getAll').subscribe(items => {

        console.log("Moderator/Admin received list of cars ", items);

        this.cars = [];
        if (items)
          for (let i of items)
            this.cars.push(new Car(i));
      });
    }

    if (user.role == 'admin') {

      this.service.get('/user/getModerators').subscribe(items => {

        console.log("Admin received list of users ", items);

        this.users = [];
        if (items)
          for (let i of items)
            this.users.push(new User(i));
      });

    }

    console.log("INIT FINISHED!");
  }

}
