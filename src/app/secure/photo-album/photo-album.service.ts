import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PhotoAlbumService {
  constructor(private http:HttpClient) {
   }

  public getPostAlbum(){
    return this.http.get(environment.urlLink + '/photos').toPromise()
  }
  
  public getAlbumById(id){
    return this.http.get(environment.urlLink + '/photos/' + id).toPromise()
  }
}

