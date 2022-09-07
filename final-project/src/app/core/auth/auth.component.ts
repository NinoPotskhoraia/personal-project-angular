import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { IUser } from './interfaces/user-interface';
import { ILoginData } from './interfaces/login-interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnDestroy {
  loginModeOn = new BehaviorSubject(true);
  registerModeOn = new BehaviorSubject(false);

  constructor(private router: Router, private userService: UserService) {}

  subscriptions: Subscription[] = [];

  modeChangeLogin() {
    this.loginModeOn.next(true);
    this.registerModeOn.next(false);
  }

  modeChangeRegister() {
    this.registerModeOn.next(true);
    this.loginModeOn.next(false);
  }

  onRegister(data: IUser) {
    this.subscriptions.push(
      this.userService
        .registerUser(data)
        .pipe(
          tap((res) => {
            if (res) {
              this.loginModeOn.next(true);
            }
          })
        )
        .subscribe()
    );
    this.registerModeOn.next(false);
  }

  onLogin(loginData: ILoginData) {
    this.subscriptions.push(
      this.userService
        .authenticate(loginData)
        .pipe(
          tap((res) => {
            if (res) {
              this.userService.logIn(res);
              this.router.navigateByUrl('/hero');
              return;
            }
            this.userService.logInError.next(true);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }
}
