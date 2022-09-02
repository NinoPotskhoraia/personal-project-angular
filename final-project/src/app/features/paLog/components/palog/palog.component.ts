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

  aerobic() {
    this.paService.Aerobic();
  }

  weightLoss() {
    this.paService.WeightLoss();
  }

  strength() {
    this.paService.Strength();
  }

  flexibility() {
    this.paService.Flexibility();
  }

  mentalHealth() {
    this.paService.MentalHealth();
  }

  approve() {
    this.paService.Approve();
  }

  setCustomWorkout(routine: IPlan[]) {
    this.paService.CustomWorkout(routine);
  }
}
