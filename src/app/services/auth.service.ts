import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
  }

  
  signUp(email, password) {
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this._firebaseAuth.auth.signOut();
  }

  get isLoggedIn() {
    return this._firebaseAuth.auth ? true : false;
  }
  
  get currentUserObservable(): any {
    return this._firebaseAuth.auth;
  }

}
