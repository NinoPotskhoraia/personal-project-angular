import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/shared/components/sign-up/sign-up.component';
import { SmResultsComponent } from './components/sm-results/sm-results.component';
import { SmComponent } from './components/sm/sm.component';

const routes: Routes = [
  {
    path: '',
    component: SmComponent,
  },
  {
    path: 'results',
    component: SmResultsComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SMRoutingModule {}
