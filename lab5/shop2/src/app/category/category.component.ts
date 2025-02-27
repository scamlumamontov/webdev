import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [NgFor, RouterLink, RouterModule],
  standalone: true,
  //templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  template:`
    <div *ngFor="let k of [1, 2, 3, 4]">
        <nav>
          <a routerLink="/category/{{k}}">Category {{k}}</a>
        </nav>
    </div>
  `

})
export class CategoryComponent {

}
