import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  constructor() { }
canActivate(){

if(localStorage['currentUser'] === "admin" && localStorage['currentPassword']== "admin")
{
  return true;
}
  else{
    return false;
  }
 
}
}
