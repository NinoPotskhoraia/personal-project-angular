import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: AuthComponent }])],
  exports: [RouterModule],
})
export class AuthRoutingModule {}