import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumserService } from '../albumser.service';
import { FormsModule } from '@angular/forms';
import { Albumint } from '../albumint';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albumdetail',
  imports: [FormsModule, RouterLink],
  //templateUrl: './albumdetail.component.html',
  styleUrl: './albumdetail.component.css',
  template: `
    <p>Details</p>

    <input type="text" [(ngModel)]="input">
    <button (click)="changeName()"> change name </button>

    <a routerLink = "/albums" style="display: block;"> Go back </a>

    <p>{{id}}</p>

    <p> userId : {{cur.userId}} </p>
    <p> id: {{cur.id}} </p>
    <p> Title: {{cur.title}} </p>
    
    <a routerLink="photos"> Photos </a>
  `
})

export class AlbumdetailComponent {
  ngOnInit(){
    this.ser.getById(this.id).subscribe(
      (album) => { this.cur = album; this.input = album.title; }
    )
  }

  id!:number;
  input!:string;
  cur!:Albumint;

  constructor(private route:ActivatedRoute, private ser: AlbumserService){
    this.route.paramMap.subscribe(params =>
      { this.id = Number(params.get('id')); }
    )
  }

  changeName():void{
    this.ser.updateAlbum(this.id, this.input);
    this.cur.title = this.input;
  }
}
