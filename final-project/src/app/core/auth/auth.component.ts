import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { BehaviorSubject, Subscription } from 'rxjs';
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
    this.userService.registerUser(data);
    this.registerModeOn.next(false);
  }

  public onLogin(loginData: ILoginData): void {
    this.userService.authenticate(loginData);
  }
}
