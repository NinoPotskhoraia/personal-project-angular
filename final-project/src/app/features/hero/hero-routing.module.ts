import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/shared/components/sign-up/sign-up.component';
import { HeroComponent } from './components/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroRoutingModule {}
