import { Injectable } from '@angular/core';
import { RequestOptions,Headers, Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

header: Headers;
options: RequestOptions;
  constructor(public http:Http) { 
    this.header = new Headers();

    //append header data
    this.header.append('Content-Type', 'application/json; charset=UTF-8');
    this.options = new RequestOptions({headers:this.header});
  }
  public getUserList(){
    return this.http.get('http://localhost:3000/LoginUser').toPromise()
  }
}
