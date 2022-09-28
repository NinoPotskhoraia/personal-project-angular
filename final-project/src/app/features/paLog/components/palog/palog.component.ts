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
    this.paService.cardio.forEach((item) => this.paService.postRoutine(item));
    setTimeout(() => {
      this.paService.getAerobicRoutine();
    }, 400);
  }

  public weightLoss(): void {
    this.paService.weightLoss.forEach((item) =>
      this.paService.postRoutine(item)
    );
    setTimeout(() => {
      this.paService.getWeightLossRoutine();
    }, 400);
  }

  public strength(): void {
    this.paService.strength.forEach((item) => this.paService.postRoutine(item));
    setTimeout(() => {
      this.paService.getStrengthRoutine();
    }, 400);
  }

  public flexibility(): void {
    this.paService.flexibility.forEach((item) =>
      this.paService.postRoutine(item)
    );
    setTimeout(() => {
      this.paService.getFlexibilityRoutine();
    }, 400);
  }

  public mentalHealth(): void {
    this.paService.mentalHealth.forEach((item) =>
      this.paService.postRoutine(item)
    );
    setTimeout(() => {
      this.paService.getMentalHealthRoutine();
    }, 400);
  }

  public approve(): void {
    this.paService.Approve();
  }

  public setCustomWorkout(routine: IPlan[]): void {
    routine.forEach((item)=>this.paService.postRoutine({...item, category: 'custom'}));
    setTimeout(() => {
      this.paService.getCustomWorkout();
    }, 400);
  }
}
