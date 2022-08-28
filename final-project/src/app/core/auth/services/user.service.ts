import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  Observable,
  shareReplay,
  map,
  catchError,
  of,
} from 'rxjs';
import { IUser } from '../interfaces/user-interface';
import { ILoginData } from '../interfaces/login-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  private loggedInSubject = new BehaviorSubject<IUser | null>(null);
  loggedInUser = this.loggedInSubject.pipe(shareReplay(1));
  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  logIn(user: IUser) {
    this.loggedInSubject.next(user);
    this.loggedIn.next(true);
  }

  logOut() {
    this.loggedInSubject.next(null);
    this.router.navigateByUrl('auth');
  }
  private baseUrl = 'http://localhost:3000';

  public registerUser(payload: IUser) {
    return this.http.post<IUser>(this.baseUrl + '/users', payload).pipe(
      catchError((e) => {
        console.log(e.message);
        return of([]);
      })
    );
  }

  public getUsersData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.baseUrl + '/users').pipe(
      catchError((e) => {
        console.log(e.message);
        return of([]);
      })
    );
  }

  authenticate(user: ILoginData): Observable<IUser | undefined> {
    return this.getUsersData().pipe(
      map((users) =>
        users.find(
          (regUser) =>
            regUser.email === user.email && regUser.password === user.password
        )
      )
    );
  }
}
