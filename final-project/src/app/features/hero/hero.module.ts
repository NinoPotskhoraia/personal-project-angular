import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero.component';
import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, HeroRoutingModule],
})
export class HeroModule {}
