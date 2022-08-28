import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
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
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public loginCta: Subject<boolean> = new Subject();

  ngOnInit(): void {
    this.loggedIn = this.userService.loggedIn;
  }

  constructor(private userService: UserService) {}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public onLogin() {
    this.logIn.emit(this.loginForm.getRawValue() as ILoginData);
    setTimeout(() => {
      this.loginCta.next(true);
    }, 100);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
