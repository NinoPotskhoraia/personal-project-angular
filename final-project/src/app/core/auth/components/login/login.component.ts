import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { ILoginData } from '../../interfaces/login-interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @Output() logIn = new EventEmitter<ILoginData>();
  public logInError: ReplaySubject<boolean> = new ReplaySubject();

  ngOnInit(): void {
    this.logInError = this.userService.logInError;
  }

  constructor(private userService: UserService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public onLogin(): void {
    this.logIn.emit(this.loginForm.getRawValue() as ILoginData);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
