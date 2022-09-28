import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../interfaces/pa-log-interface';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class PaService {
  constructor(public firestore: Firestore) {}

  paRoutine: BehaviorSubject<IPlan[]> = new BehaviorSubject([] as IPlan[]);

  choosing = new BehaviorSubject(true);
  editing = new BehaviorSubject(true);
  done = new BehaviorSubject(false);
  public data: any[] = [];

  postRoutine(routine: IPlan) {
    const dbInstance = collection(this.firestore, 'routines');
    addDoc(dbInstance, routine).then(
      () => {
        console.log('data sent');
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getAerobicRoutine() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'cardio')
        );
      })
      .catch((err) => console.log(err.message));
  }

  getWeightLossRoutine() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'weightLoss')
        );
      })
      .catch((err) => console.log(err.message));
  }

  getStrengthRoutine() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'strength')
        );
      })
      .catch((err) => console.log(err.message));
  }

  getFlexibilityRoutine() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'flexibility')
        );
      })
      .catch((err) => console.log(err.message));
  }

  getMentalHealthRoutine() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'mentalHealth')
        );
      })
      .catch((err) => console.log(err.message));
  }

  getCustomWorkout() {
    const dbInstance = collection(this.firestore, 'routines');
    getDocs(dbInstance)
      .then((res) => {
        this.data = [
          ...res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          }),
        ];
        this.paRoutine.next(
          this.data.filter((item) => item.category === 'custom')
        );
      })
      .catch((err) => console.log(err.message));
    this.choosing.next(false);
    this.editing.next(false);
  }

  Approve() {
    this.choosing.next(false);
    this.editing.next(false);
  }

  cardio: IPlan[] = [
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Cycling or Running',
      category: 'cardio',
    },
    {
      duration: 1,
      timeUnit: 'hour',
      activity: 'Swimming',
      category: 'cardio',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Push-ups and Sit-ups',
      category: 'cardio',
    },
    {
      duration: 10,
      timeUnit: 'minutes',
      activity: 'Calf-lifts',
      category: 'cardio',
    },
  ];

  weightLoss: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Running',
      category: 'weightLoss',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Weight Lifting',
      category: 'weightLoss',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Pilates',
      category: 'weightLoss',
    },
  ];

  strength: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Push-ups and Sit-ups',
      category: 'strength',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Weight Lifting',
      category: 'strength',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Jogging',
      category: 'strength',
    },
  ];

  flexibility: IPlan[] = [
    {
      duration: 45,
      timeUnit: 'minutes',
      activity: 'Yoga',
      category: 'flexibility',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Swimming',
      category: 'flexibility',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Cycling',
      category: 'flexibility',
    },
    {
      duration: 15,
      timeUnit: 'minutes',
      activity: 'Calf and Toe Lifts',
      category: 'flexibility',
    },
  ];

  mentalHealth: IPlan[] = [
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Yoga',
      category: 'mentalHealth',
    },
    {
      duration: 20,
      timeUnit: 'minutes',
      activity: 'Pilates',
      category: 'mentalHealth',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Jogging',
      category: 'mentalHelath',
    },
    {
      duration: 30,
      timeUnit: 'minutes',
      activity: 'Swimming',
      category: 'mentalHealth',
    },
  ];
}
