import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../../interfaces/pa-log-interface';
import { PaService } from '../../services/pa.service';

@Component({
  selector: 'app-palog',
  templateUrl: './palog.component.html',
  styleUrls: ['./palog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PALogComponent implements OnInit {
  constructor(private paService: PaService) {}

  ngOnInit(): void {}

  public aerobic(): void {
    this.paService.Aerobic();
  }

  public weightLoss(): void {
    this.paService.WeightLoss();
  }

  public strength(): void {
    this.paService.Strength();
  }

  public flexibility(): void {
    this.paService.Flexibility();
  }

  public mentalHealth(): void {
    this.paService.MentalHealth();
  }

  public approve(): void {
    this.paService.Approve();
  }

  public setCustomWorkout(routine: IPlan[]): void {
    this.paService.CustomWorkout(routine);
  }
}
