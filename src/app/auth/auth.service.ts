import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully()
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authSuccessfully()
  }

  logout() {
    this.user = null;
    this.authChange.next(false)
    this.router.navigate(['/login'])

  }

  getUser() {
    this.user = { ...this.user }
  }

  private authSuccessfully() {
    this.authChange.next(true)
    this.router.navigate(['/'])
  }
}
