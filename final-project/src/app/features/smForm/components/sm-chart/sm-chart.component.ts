import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ITip } from '../../interfaces/sm-interface';
import { SmService } from '../../services/sm.service';

@Component({
  selector: 'app-sm-chart',
  templateUrl: './sm-chart.component.html',
  styleUrls: ['./sm-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmChartComponent implements OnInit {
  constructor(private smService: SmService) {}
  tipsSubject: BehaviorSubject<ITip[]> = new BehaviorSubject([{}] as ITip[]);
  showMoodTips = new BehaviorSubject(false);
  showDiscomfortTips = new BehaviorSubject(false);
  showBehaviorTips = new BehaviorSubject(false);
  marked = 0;
  markedSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  submited = new BehaviorSubject(false);
  result: BehaviorSubject<string> = new BehaviorSubject('');

  @Output() moodTip = new EventEmitter();
  @Output() symptomTip = new EventEmitter();
  @Output() behaviorTip = new EventEmitter();

  psychForm = new FormGroup({
    irritation: new FormControl(''),
    anxiety: new FormControl(''),
    depressed: new FormControl(''),
    lonely: new FormControl(''),
  });

  physForm = new FormGroup({
    breathing: new FormControl(''),
    panic: new FormControl(''),
    sleep: new FormControl(''),
    vision: new FormControl(''),
    fatigue: new FormControl(''),
    pain: new FormControl(''),
    sweating: new FormControl(''),
  });

  behaviorForm = new FormGroup({
    concentration: new FormControl(''),
    memory: new FormControl(''),
    aggresion: new FormControl(''),
    habits: new FormControl(''),
    eating: new FormControl(''),
  });

  ngOnInit(): void {
    this.tipsSubject = this.smService.tipsSubject;
    this.markedSubject = this.smService.markedSubject;
    this.submited = this.smService.submited;
    this.submited.next(false);
  }

  public onMoodClick(): void {
    this.moodTip.emit();
    this.showMoodTips.next(true);
    this.showDiscomfortTips.next(false);
    this.showBehaviorTips.next(false);
  }

  public onSignClick(): void {
    this.symptomTip.emit();
    this.showDiscomfortTips.next(true);
    this.showMoodTips.next(false);
    this.showBehaviorTips.next(false);
  }

  public onBehaviorClick(): void {
    this.behaviorTip.emit();
    this.showBehaviorTips.next(true);
    this.showMoodTips.next(false);
    this.showDiscomfortTips.next(false);
  }

  public onSubmit(): void {
    for (const [key, value] of Object.entries(this.psychForm.value)) {
      if (value === true) {
        this.marked++;
      }
    }

    for (const [key, value] of Object.entries(this.physForm.value)) {
      if (value === true) {
        this.marked++;
      }
    }

    for (const [key, value] of Object.entries(this.behaviorForm.value)) {
      if (value === true) {
        this.marked++;
      }
    }

    this.markedSubject.next(this.marked);
    this.submited.next(true);
    this.psychForm.reset();
    this.physForm.reset();
    this.behaviorForm.reset();
  }

  public hideMoodTips() {
    this.tipsSubject.next([]);
    this.showMoodTips.next(false);
  }

  public hidePhysTips() {
    this.tipsSubject.next([]);
    this.showDiscomfortTips.next(false);
  }

  public hideBehaviorTips() {
    this.tipsSubject.next([]);
    this.showBehaviorTips.next(false);
  }
}
