import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
