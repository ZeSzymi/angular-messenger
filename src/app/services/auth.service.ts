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
    responseType: 'token id_token',
    redirectUri: environment.auth.redirect,
    audience: environment.auth.audience,
    scope: environment.auth.scope
  });

  private userProfileEmail: any;
  private accessToken: string;

  userProfileSubject = new Subject<string>();

  constructor(public router: Router) {
    this.checkAuthentication();
  }

  public login(): void {
    this.auth0.authorize();
  }

  private checkAuthentication(): void {
    console.log(localStorage.getItem('email'));
    this.userProfileEmail = localStorage.getItem('email');
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          this.userProfileEmail = profile.email;
          this.setSession(authResult, profile);
        });
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult, profile): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('email', profile.email);
    localStorage.setItem('expires_at', expiresAt);
    this.router.navigate(['/users']);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
  }

  public get isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getUserName() {
    this.userProfileSubject.next(this.userProfileEmail);
  }

  getUser() {
    return this.userProfileEmail;
}

}





