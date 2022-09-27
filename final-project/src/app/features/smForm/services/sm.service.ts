import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  Firestore,
  getDocs,
} from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { ITip } from '../interfaces/sm-interface';

@Injectable({
  providedIn: 'root',
})
export class SmService {
  constructor(public firestore: Firestore) {}
  tipsSubject: BehaviorSubject<ITip[]> = new BehaviorSubject([{}] as ITip[]);
  markedSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  submited = new BehaviorSubject(false);
  public data: any[] = [];

  postTips(tip: ITip) {
    const dbInstance = collection(this.firestore, 'tips');
    addDoc(dbInstance, tip).then(
      () => {
        console.log('data sent');
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getMoodTips() {
    const dbInstance = collection(this.firestore, 'tips');
    getDocs(dbInstance).then((res) => {
      this.data = [
        ...res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.tipsSubject.next(
        this.data.filter((item) => item.category === 'mood')
      );
    });
  }

  getphysicalDiscomfortTips() {
    const dbInstance = collection(this.firestore, 'tips');
    getDocs(dbInstance).then((res) => {
      this.data = [
        ...res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.tipsSubject.next(
        this.data.filter((item) => item.category === 'physical-discomfort')
      );
    });
  }

  getbehaviorTips() {
    const dbInstance = collection(this.firestore, 'tips');
    getDocs(dbInstance).then((res) => {
      this.data = [
        ...res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.tipsSubject.next(
        this.data.filter((item) => item.category === 'behavior')
      );
    });
  }

  getLongTermTips() {
    const dbInstance = collection(this.firestore, 'tips');
    getDocs(dbInstance).then((res) => {
      this.data = [
        ...res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      ];
      this.tipsSubject.next(
        this.data.filter((item) => item.category === 'long-term')
      );
    });
  }

  tips: ITip[] = [
    {
      category: 'mood',
      body: 'Listen to soothing music.',
    },
    {
      category: 'mood',
      body: 'Practice mindful meditation',
    },
    {
      category: 'mood',
      body: 'Try Aromatherapy',
    },
    {
      category: 'mood',
      body: 'Spend time with family and friends',
    },
    {
      category: 'mood',
      body: 'Talk about what you are feeling',
    },
    {
      category: 'physical-discomfort',
      body: 'Focus on Breathing',
    },
    {
      category: 'physical-discomfort',
      body: 'Practice Progressive Muscle Relaxation',
    },
    {
      category: 'physical-discomfort',
      body: 'Reduce your caffeine intake.',
    },
    {
      category: 'physical-discomfort',
      body: 'Minimize phone use and screen time.',
    },
    {
      category: 'physical-discomfort',
      body: 'exercise',
    },
    {
      category: 'behavior',
      body: 'Take a Break.',
    },
    {
      category: 'behavior',
      body: 'Connect with others.',
    },
    {
      category: 'behavior',
      body: 'Take slow, deep breaths.',
    },
    {
      category: 'behavior',
      body: 'Write.',
    },
    {
      category: 'behavior',
      body: 'Create Artwork.',
    },
    {
      category: 'long-term',
      body: 'Eat a Balanced Diet: reduce  Emotional eating and reaching for high-fat, high-sugar foods can provide a temporary sense of relief that adds to your long-term stress.',
    },
    {
      category: 'long-term',
      body: 'Try Stress Relief Supplements: Melatonin:, Ashwagandha, L-theanine:, B vitamins.',
    },
    {
      category: 'long-term',
      body: 'Make Time for Leisure Activities.',
    },
    {
      category: 'long-term',
      body: "Develop a Positive Self-Talk Habit: It's important to learn to talk to yourself in a more realistic, compassionate manner. When you call yourself names or doubt your ability to succeed, reply with a kinder inner dialogue.",
    },
    {
      category: 'long-term',
      body: 'Practice Yoga.',
    },
    {
      category: 'long-term',
      body: 'Express Gratitude.',
    },
    {
      category: 'long-term',
      body: 'Prioritize Exercise.',
    },
  ];
}
