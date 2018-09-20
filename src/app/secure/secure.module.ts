import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SuggetionsComponent } from './suggetions/suggetions.component';
import { SuggetionsService } from './suggetions/suggetions.service';
import { DataCommentsComponent } from './data-comments/data-comments.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { PhotoAlbumService } from './photo-album/photo-album.service';


export const SecureRoutes: Routes = [
  {path: '', component: SecureComponent,
        children: [
              {path: 'home', component: HomePageComponent},
              {path:'Suggestions', component: SuggetionsComponent},
              {path:'DataPost', component: DataCommentsComponent},
              {path:'DataPost/:id', component: DataCommentsComponent},
              {path: 'PhotoAlbum', component: PhotoAlbumComponent},
              {path: 'DataDisplay/:id', component: DataDisplayComponent}
            ]},
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataCommentsComponent, PhotoAlbumComponent, DataDisplayComponent]
  ,
  providers: [SuggetionsService, PhotoAlbumService],
})
export class SecureModule { }
