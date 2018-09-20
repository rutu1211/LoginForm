import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from './photo-album.service';
import { PhotoAlbum } from './photo-album';


@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit {

  private listPhotoData: any;
  listPhoto: PhotoAlbum[]= [];

  constructor(private photoAlbumservice: PhotoAlbumService) {
    
   }

  ngOnInit() {
     this.getPhotoAlbum();
    // this.photoAlbumservice.getPostAlbum().then(res =>{
    //   this.listPhoto = res;
    //})

  }

  getPhotoAlbum(){
    let result;
    let dataPhoto : PhotoAlbum = {};
      this.photoAlbumservice.getPostAlbum().then(res =>{
        this.listPhotoData = res;

        for(var i=0; i<this.listPhotoData.length; i++){
          dataPhoto.AlbumNo = this.listPhotoData[i].albumId;
          dataPhoto.Id1 = this.listPhotoData[i].id;
          dataPhoto.TitleName = this.listPhotoData[i].title;
          dataPhoto.Link1 = this.listPhotoData[i].url;
          dataPhoto.Link2 = this.listPhotoData[i].thumbnailUrl;

          this.listPhoto.push(dataPhoto);
          dataPhoto = {};
        }
      })

  }
}
