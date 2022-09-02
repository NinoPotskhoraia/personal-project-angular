import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PALogComponent } from './components/palog/palog.component';
import { PASuggestionsComponent } from './components/pasuggestions/pasuggestions.component';
import { PAFormComponent } from './components/paform/paform.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PARoutingModule } from './pa-routing.module';

@NgModule({
  declarations: [PALogComponent, PASuggestionsComponent, PAFormComponent],
  imports: [CommonModule, SharedModule, PARoutingModule],
})
export class PAModule {}
