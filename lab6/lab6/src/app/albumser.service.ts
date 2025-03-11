import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import { Albumint } from './albumint';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumsStore = new BehaviorSubject<Albumint[]>([]);
  albums$ = this.albumsStore.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Albumint[]>(this.baseUrl).subscribe(albums => {
      this.albumsStore.next(albums);
    });
  }

  getAlbums(): Observable<any[]>{
    return this.albumsStore;
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getById(id: number): Observable<Albumint>{
    return this.http.get<Albumint>(`${this.baseUrl}/${id}`);
  }

  updateAlbum(id: number, newTitle: string): Observable<any> {
    let originalAlbums = this.albumsStore;
    let updatedAlbums = this.albumsStore.value.map(album =>
      album.id === id ? { ...album, title: newTitle } : album
    );
    this.albumsStore.next(updatedAlbums);

    return this.http.put<any>(`${this.baseUrl}/${id}`, { title: newTitle }).pipe(
      tap({
        error: (err) => {
          this.albumsStore = originalAlbums;
        }
      })
    );
  }

  PhotosById(id:Number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.baseUrl}/${id}/photos`)
  }

}
