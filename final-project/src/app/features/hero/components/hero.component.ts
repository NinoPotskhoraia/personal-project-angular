import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  constructor() {}

  showButton = true;
  showOptions = false;

  public onClick(): void {
    this.showButton = false;
    this.showOptions = true;
  }
}
