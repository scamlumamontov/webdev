import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo';
import { AlbumserService } from '../albumser.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albumphoto',
  imports: [NgFor, RouterLink],
  //templateUrl: './albumphoto.component.html',
  styleUrl: './albumphoto.component.css',
  template:`
    <a routerLink="/albums/{{id}}" style="display: block;">Go back!</a>
    <div class="list">
      <div class="content" *ngFor="let k of f; index as id1">
        <p>Album index: {{id}} </p>
        <p> albumId: {{k.albumId}} </p>
        <p> id: {{k.id}} </p>
        <p> title: {{k.title}} </p>
        <p> url: {{k.url}} </p>
        <p> thumbnailUrl: {{k.thumbnailUrl}} </p>
        <p></p>
      </div>
    </div>
  `
})
export class AlbumphotoComponent {
  id!:Number;

  f!:Photo[];
  constructor(private serv:AlbumserService, private route:ActivatedRoute){
    this.route.paramMap.subscribe(params =>
      {
        this.id = Number(params.get('id')); 
        this.serv.PhotosById(this.id).subscribe({
          next: (album) => { this.f = album; },
          error: (err) => { console.error('Ошибка при загрузке фотографий:', err); }
        });

      }
    )
  }

  ngOnInit(){}

  
}
