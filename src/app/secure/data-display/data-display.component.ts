import { Component, OnInit } from '@angular/core';
import { PhotoAlbumService } from '../photo-album/photo-album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  private listPhoto;
  id: number;
  constructor(private photoAlbumservice: PhotoAlbumService, private route: ActivatedRoute) {
   this.id = this.route.snapshot.params.id;
   }

  ngOnInit() {
    this.getAlbumById(this.id);
  }

  getAlbumById(id){
    let result;
    this.photoAlbumservice.getAlbumById(id).then (res =>{
      this.listPhoto = res;
    })
  }

}
