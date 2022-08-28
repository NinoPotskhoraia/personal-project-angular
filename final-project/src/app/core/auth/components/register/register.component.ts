import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user-interface';
import { passwordValidator } from '../../validators/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  @Output() register = new EventEmitter<IUser>();

  regForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl(0, Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirm: new FormControl('', Validators.required),
      job: new FormControl(''),
      check: new FormControl('', Validators.required),
    },
    { validators: passwordValidator }
  );

  constructor() {}

  onRegister() {
    this.register.emit(this.regForm.getRawValue() as IUser);
    console.log(this.regForm);
  }

  get name() {
    return this.regForm.get('name');
  }

  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  get confirm() {
    return this.regForm.get('confirm');
  }

  get age() {
    return this.regForm.get('age');
  }

  get job() {
    return this.regForm.get('job');
  }
}
