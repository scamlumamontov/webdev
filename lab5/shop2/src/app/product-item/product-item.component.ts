import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-item',
  imports: [],
  //templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
  template:`
  <div class="content">
      <p class="name"> name : {{products.name}} </p>
      <img [src]="products.img1" class="img">
      <p> rating: {{products.rating}} </p>
      <p> 
        description:<br>
        {{products.description}}
      </p>
      <a [href]="products.url">Details</a>

      <div></div>

      <div>
        <button (click)="Press()" style="margin-top: 20px;"> Like! </button>
        <p>Likes: {{likes}}</p>
      </div>

      <p style="margin-top: 5px;">Index: {{id}}</p>

      <button (click)="onDelete()">Delete!</button>

    </div>
  `
})

export class ProductItemComponent {
  @Input() products!:Products;
  @Input() id!:number;
  @Output() DeletePress = new EventEmitter<number>();

  onDelete():void{
    console.log("Child " + this.id);
    this.DeletePress.emit(this.id);
  }

  likes:number = 0;
  Press():void{
    this.likes += 1;
  }
}