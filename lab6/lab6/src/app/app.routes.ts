import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AlbumscompComponent } from './albumscomp/albumscomp.component';
import { AlbumdetailComponent } from './albumdetail/albumdetail.component';
import { AlbumphotoComponent } from './albumphoto/albumphoto.component';

export const routes: Routes = [
    {path:'home', component : HomeComponent},
    {path:'about', component:AboutComponent},
    {path: "albums", component:AlbumscompComponent},
    {path:"", redirectTo:"home", pathMatch:'full'},
    {path:"details", component:AlbumdetailComponent},
    {path:"photo", component:AlbumphotoComponent},
    {path:"albums/:id", component:AlbumdetailComponent},
    {path:"albums/:id/photos", component:AlbumphotoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule{

}
