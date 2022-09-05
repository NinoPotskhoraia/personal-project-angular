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
  }

  onMoodClick() {
    this.moodTip.emit();
    this.showMoodTips.next(true);
    this.showDiscomfortTips.next(false);
    this.showBehaviorTips.next(false);
  }

  onSignClick() {
    this.symptomTip.emit();
    this.showDiscomfortTips.next(true);
    this.showMoodTips.next(false);
    this.showBehaviorTips.next(false);
  }

  onBehaviorClick() {
    this.behaviorTip.emit();
    this.showBehaviorTips.next(true);
    this.showMoodTips.next(false);
    this.showDiscomfortTips.next(false);
  }

  onSubmit() {
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
}
