import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = false;

  get isAthenticated(){
    return this._isAuthenticated;
  }
  constructor() { }

  login(){
    this._isAuthenticated = true;
  }

  logout(){
    this._isAuthenticated = false;
  }

}
