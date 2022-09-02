import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../interfaces/pa-log-interface';

@Injectable({
  providedIn: 'root',
})
export class PaService {
  constructor() {}

  paRoutine: BehaviorSubject<IPlan[]> = new BehaviorSubject([] as IPlan[]);

  choosing = new BehaviorSubject(true);

  Aerobic() {
    this.paRoutine.next(this.cardio);
  }

  WeightLoss() {
    this.paRoutine.next(this.weightLoss);
  }

  Strength() {
    this.paRoutine.next(this.strength);
  }

  Flexibility() {
    this.paRoutine.next(this.flexibility);
  }

  MentalHealth() {
    this.paRoutine.next(this.mentalHealth);
  }

  CustomWorkout(routine: IPlan[]) {
    this.paRoutine.next(routine);
    this.choosing.next(false);
  }

  Approve() {
    this.choosing.next(false);
  }

  cardio: IPlan[] = [
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Cycling or Running',
    },
    {
      duration: 1,
      timeUnit: 'hour',
      activity: 'Swimming',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Push-ups and Sit-ups',
    },
    {
      duration: 10,
      timeUnit: 'minutes',
      activity: 'Calf-lifts',
    },
  ];

  weightLoss: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Running',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Weight Lifting',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Pilates',
    },
  ];

  strength: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Push-ups and Sit-ups',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Weight Lifting',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Jogging',
    },
  ];

  flexibility: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Yoga',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Swimming',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Cycling',
    },
    {
      duration: 15,
      timeUnit: 'minutes',
      activity: 'Calf and Toe Lifts',
    },
  ];

  mentalHealth: IPlan[] = [
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Yoga',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Pilates',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Jogging',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Swimming',
    },
  ];
}
