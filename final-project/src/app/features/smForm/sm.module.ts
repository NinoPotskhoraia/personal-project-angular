import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmChartComponent } from './components/sm-chart/sm-chart.component';
import { SmComponent } from './components/sm/sm.component';
import { SmSuggestionsComponent } from './components/sm-suggestions/sm-suggestions.component';
import { SMRoutingModule } from './sm-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SmChartComponent, SmComponent, SmSuggestionsComponent],
  imports: [CommonModule, SMRoutingModule, SharedModule],
})
export class SmModule {}
