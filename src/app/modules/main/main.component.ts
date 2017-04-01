import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  page: string;
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

}
