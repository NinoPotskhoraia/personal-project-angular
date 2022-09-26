import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
export class AuthComponent implements OnInit {
  loginModeOn = new BehaviorSubject(true);
  registerModeOn = new BehaviorSubject(false);

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.loginModeOn = this.userService.loginModeOn;
  }

  subscriptions: Subscription[] = [];

  public modeChangeRegister() {
    this.registerModeOn.next(true);
    this.loginModeOn.next(false);
  }

  public onRegister(data: IUser): void {
    // this.subscriptions.push(
    //   this.userService
    //     .registerUser(data)
    //     .pipe(
    //       tap((res) => {
    //         if (res) {
    //           this.loginModeOn.next(true);
    //         }
    //       })
    //     )
    //     .subscribe()
    // );
    this.userService.registerUser(data);
    this.registerModeOn.next(false);
  }

  public onLogin(loginData: ILoginData): void {
    // this.subscriptions.push(
    //   this.userService
    //     .authenticate(loginData)
    //     .pipe(
    //       tap((res) => {
    //         if (res) {
    //           this.userService.logIn(res);
    //           this.router.navigateByUrl('/hero');
    //           return;
    //         }
    //       })
    //     )
    //     .subscribe()
    // );
    this.userService.authenticate(loginData);
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((element) => element.unsubscribe());
  // }
}
