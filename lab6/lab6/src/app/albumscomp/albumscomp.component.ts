import { Component } from '@angular/core';
import { AlbumserService } from '../albumser.service';
import { OnInit } from '@angular/core';
import { Albumint } from '../albumint';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albumscomp',
  imports: [NgFor, RouterLink],
  //templateUrl: './albumscomp.component.html',
  styleUrl: './albumscomp.component.css',
  template: `
  <p>albumscomp works!</p>
  <a routerLink="/home">Go home</a>

  <div class="list">
      <div class="content" *ngFor="let q of tot; index as id">
        <p> userId: {{q.userId}} </p>
        <p> Title: {{q.title}} </p>
        <p> id: {{q.id}} </p>
        <a  routerLink="{{id + 1}}"> Details </a>
        <p></p>
        <p></p>
        <button (click)="deleteAlbum(id)"> Delete! </button>
      </div>
  </div>
  `
})
export class AlbumscompComponent {
  tot:Albumint[] = [];
  cur!:Observable<Albumint[]>;

  constructor(private ser: AlbumserService) {
    this.cur = this.ser.getAlbums();
    
  }

  deleteAlbum(id: number): void {
    /*this.ser.deleteById(id).subscribe(() => {
      this.cur = this.ser.getAlbums();
      this.cur.subscribe(albums => {
        this.tot = [...albums];
      });
    });*/
    this.tot = this.tot.filter(album => album.id !== id + 1);
  }

  ngOnInit(){
    this.cur.subscribe(albums => {
      this.tot = [];
      for(let k of albums){ this.tot.push(k); }
    });
  }

}
