import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { RequestOptions,Headers, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http/http';

@Injectable({
  providedIn: 'root'
})
export class SuggetionsService {

header: Headers;
options: RequestOptions;
  constructor(public http:Http) {
//declare
    this.header = new Headers();

//append header data
this.header.append('Content-Type', 'application/json; charset=UTF-8');

//accept
//this.header.append('accept', 'application/json');

this.options = new RequestOptions({headers:this.header});


   }

   public enterData(title,body,userId){
     let newData = JSON.stringify({
      title: title,
      body: body,
      userId: userId
     })

     return this.http.post('https://jsonplaceholder.typicode.com/posts', newData, this.options).toPromise();
   }

  public getPostList(){
    return this.http.get(environment.urlLink + '/posts').toPromise()
  }
  public getdat(){
    
  }
  public getPostById(id){
    return this.http.get(environment.urlLink + '/posts/' + id).toPromise()
  }
}
