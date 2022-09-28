import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { IUser } from '../interfaces/user-interface';
import { ILoginData } from '../interfaces/login-interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private router: Router, private auth: AngularFireAuth) {}
  public loggedInSubject = new BehaviorSubject<boolean>(false);
  logInError: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  loginModeOn = new BehaviorSubject(true);

  logOut() {
    this.auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigateByUrl('auth');
        this.loggedInSubject.next(false);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public registerUser(payload: IUser) {
    this.auth
      .createUserWithEmailAndPassword(
        payload.email,
        payload.password.toString()
      )
      .then(
        () => {
          this.loginModeOn.next(true);
        },
        (err) => {
          alert(err.message);
        }
      );
  }

  authenticate(user: ILoginData) {
    this.auth
      .signInWithEmailAndPassword(user.email, user.password.toString())
      .then(
        () => {
          localStorage.setItem('token', 'true');
          this.loggedInSubject.next(true);
          this.router.navigateByUrl('/hero');
        },
        (err) => {
          this.logInError.next(true);
        }
      );
  }
}
