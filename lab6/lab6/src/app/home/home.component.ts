import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  //templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  template:`
    <a routerLink="/albums" style="display: block;">Albums</a>
    <a routerLink="/about">About</a>
  `
})
export class HomeComponent {

}
