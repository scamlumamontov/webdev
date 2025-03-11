import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:`
    <h1>Albums</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'lab6';
}
