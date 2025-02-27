import { Component, inject, Input } from '@angular/core';
import { Products } from '../products';
import { ProductServiceService } from '../product-service.service';
import { ProductItemComponent } from "../product-item/product-item.component";
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, NgFor, RouterLink],
  //templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  template:`
      <h1>Category: {{id}}</h1>

      <nav>
        <a routerLink="/home">Go home</a>
      </nav>

      <div class="products">
        <app-product-item *ngFor="let k of idlist;" [products]="items[k]" [id]="k"
          (DeletePress)="DeletePress($event)"
        >
          
        </app-product-item>
      </div>

      <h1>Total: {{idlist.length}}</h1>
  `
})

export class ProductListComponent {
  @Input() id!: number;
  items:Products[] = [];
  
  constructor(private service: ProductServiceService){
    
  }

  idlist:number[] = [];
  load():void{
    this.items = this.service.getById(this.id);
    for(let i = 0; i < this.items.length; i += 1){
      this.idlist.push(i);
    }
    //console.log(this.idlist);
  }

  private route = inject(ActivatedRoute);
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.load();
    });

  }

  DeletePress(index: number):void{
    //console.log(index + " deleted");
    this.idlist = this.idlist.filter((a) => (a == index ? false : true));
  }

}
