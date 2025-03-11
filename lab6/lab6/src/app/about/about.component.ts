import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  //templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  template:`
    <a routerLink="/home">Go back!</a>
    <h1>We love Albums!</h1>
  `
})
export class AboutComponent {

}
