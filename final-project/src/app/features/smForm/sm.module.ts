import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmChartComponent } from './components/sm-chart/sm-chart.component';
import { SmResultsComponent } from './components/sm-results/sm-results.component';
import { SmSuggestionsComponent } from './components/sm-suggestions/sm-suggestions.component';
import { SMRoutingModule } from './sm-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SmChartComponent, SmResultsComponent, SmSuggestionsComponent],
  imports: [CommonModule, SMRoutingModule, SharedModule],
})
export class SmModule {}
