import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent,
      },
    ]),
  ],
})
export class SignUpModule {}
