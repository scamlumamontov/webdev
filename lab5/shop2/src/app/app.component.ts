import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:`
      <h1>Kaspi.kz</h1>
      <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'shop2';
}
