import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmChartComponent } from './components/sm-chart/sm-chart.component';
import { SmComponent } from './components/sm/sm.component';
import { SMRoutingModule } from './sm-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmResultsComponent } from './components/sm-results/sm-results.component';

@NgModule({
  declarations: [SmChartComponent, SmComponent, SmResultsComponent],
  imports: [CommonModule, SMRoutingModule, SharedModule],
})
export class SmModule {}
