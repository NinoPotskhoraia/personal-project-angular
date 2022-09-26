import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  shareReplay,
  map,
  catchError,
  of,
  ReplaySubject,
} from 'rxjs';
import { IUser } from '../interfaces/user-interface';
import { ILoginData } from '../interfaces/login-interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AngularFireAuth
  ) {}
  public loggedInSubject = new BehaviorSubject<boolean>(false);
  // loggedInUser = this.loggedInSubject.pipe(shareReplay(1));
  logInError: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  loginModeOn = new BehaviorSubject(true);

  // logIn(user: IUser) {
  //   this.loggedInSubject.next(user);
  // }

  logOut() {
    this.auth.signOut().then(
      () => {
        localStorage.removeItem('token');
        // this.loggedInSubject.next(null);
        this.router.navigateByUrl('auth');
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  private baseUrl = 'http://localhost:3000';

  public registerUser(payload: IUser) {
    // return this.http.post<IUser>(this.baseUrl + '/users', payload).pipe(
    //   catchError((e) => {
    //     console.log(e.message);
    //     return of([]);
    //   })
    // );
    this.auth
      .createUserWithEmailAndPassword(
        payload.email,
        payload.password.toString()
      )
      .then(
        () => {
          alert('Registration Successful!');
          this.loginModeOn.next(true);
        },
        (err) => {
          alert(err.message);
        }
      );
  }

  // public getUsersData(): Observable<IUser[]> {
  //   return this.http.get<IUser[]>(this.baseUrl + '/users').pipe(
  //     catchError((e) => {
  //       console.log(e.message);
  //       return of([]);
  //     })
  //   );
  // }

  authenticate(user: ILoginData) {
    // return this.getUsersData().pipe(
    //   map((users) =>
    //     users.find(
    //       (regUser) =>
    //         regUser.email === user.email && regUser.password === user.password
    //     )
    //   )
    // );
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
