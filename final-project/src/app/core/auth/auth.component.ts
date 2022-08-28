import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { tap } from 'rxjs';
import { IUser } from './interfaces/user-interface';
import { ILoginData } from './interfaces/login-interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  mode: 'register' | 'login' = 'login';

  constructor(private router: Router, private userService: UserService) {}

  onRegister(data: IUser) {
    this.userService
      .registerUser(data)
      .pipe(
        tap((res) => {
          if (res) {
            this.mode = 'login';
          }
        })
      )
      .subscribe();
  }

  onLogin(loginData: ILoginData) {
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
      .subscribe();
  }
}
