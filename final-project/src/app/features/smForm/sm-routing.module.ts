import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmChartComponent } from './components/sm-chart/sm-chart.component';

const routes: Routes = [
  {
    path: '',
    component: SmChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SMRoutingModule {}
