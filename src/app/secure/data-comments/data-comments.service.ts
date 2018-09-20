import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataCommentsService {

  constructor(private http:HttpClient) { }

  public getPostList(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments').toPromise()
  }
  public getdat(){
    
  }
}