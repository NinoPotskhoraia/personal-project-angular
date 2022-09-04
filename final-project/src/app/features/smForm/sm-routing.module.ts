import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmComponent } from './components/sm/sm.component';

const routes: Routes = [
  {
    path: '',
    component: SmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SMRoutingModule {}
