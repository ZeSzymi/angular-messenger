import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });

  userProfile: any;
  accessToken: string;
  authenticated: boolean;
  userProfileSubject = new Subject<string>();

  constructor(private router: Router) {
    this.getAccessToken();
  }

  login() {
    this.auth0.authorize();
  }

  handleLoginCallback() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.log(`Error: ${err.error}`);
      }
    });
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        console.log(authResult);
        this.getUserInfo(authResult);
      } else if (err) {
        console.log(err);
        this.logout();
        this.authenticated = false;
      }
    });
  }

  getUserInfo(authResult) {
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
    });
  }

  private _setSession(authResult, profile) {
    const expTime = authResult.expiresIn * 1000 + Date.now();
    localStorage.setItem('expires_at', JSON.stringify(expTime));
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
    this.router.navigate(['/temporary']);
  }

  logout() {
    localStorage.removeItem('expires_at');
    this.userProfile = undefined;
    this.accessToken = undefined;
    this.authenticated = false;
  }

  get isLoggedIn(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt && this.authenticated;
  }

  getUserName() {
    console.log('herro');
    this.userProfileSubject.next(this.userProfile.email);
  }

  getUser() {
    console.log(this.userProfile.email);
    return this.userProfile.email;
}

}





