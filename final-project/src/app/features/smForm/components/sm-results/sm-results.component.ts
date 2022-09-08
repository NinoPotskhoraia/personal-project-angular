import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, catchError, of, Subscription, tap } from 'rxjs';
import { ITip } from '../../interfaces/sm-interface';
import { SmService } from '../../services/sm.service';

@Component({
  selector: 'app-sm-results',
  templateUrl: './sm-results.component.html',
  styleUrls: ['./sm-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmResultsComponent implements OnInit, OnDestroy {
  constructor(private smService: SmService) {}

  tipsSubject: BehaviorSubject<ITip[]> = new BehaviorSubject([{}] as ITip[]);

  result: BehaviorSubject<string> = new BehaviorSubject('');

  markedSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  helpRequest = new BehaviorSubject(false);
  submited = new BehaviorSubject(false);
  helpSuggestion = new BehaviorSubject(false);
  arr: ITip[] = [];

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.markedSubject = this.smService.markedSubject;
    if (this.markedSubject.value <= 1) {
      this.result.next(
        "Congratulation! You don't seem to be experiencing hightened level of Stress Today. Keep up the Good Work, we are rooting for you!"
      );
    } else if (this.markedSubject.value <= 4) {
      this.result.next(
        'Your results suggest that you are experiencing Slightly elevated Stress load. Kick back and relax a little, practice self-love and all will be well!'
      );
    } else if (this.markedSubject.value <= 6) {
      this.result.next(
        'Your results suggest that your are experinecing Moderate amount of Stress Load Today. Please be cautious, take as many breaks as you need and be sure to check out our Stress Managemnet Strategies and implement them in your Daily Routine. We Hope you have a Beautidul Day'
      );
    } else if (this.markedSubject.value >= 6) {
      this.result.next(
        "Your results suggest that you are suffering from Hight Stress Load. We Strongly Suggest that you talk to your Health Care Provider as soon as possible and discuss Stress Management Strategies with them as well as check out the tips we have provided for you. We Also encourage you to Talk to a Mental Health Professional. If you currently don't have accesse to one we offer you to click on the button below and enlist yourself in the waiting list of our highly qualified Mental Helth Providers. We Hope to hear from you soon!"
      );
      this.helpSuggestion.next(true);
    }
    this.submited = this.smService.submited;
    this.tipsSubject = this.smService.tipsSubject;
  }

  public onClick(): void {
    this.helpRequest.next(true);
    this.subscriptions.push(
      this.smService
        .getTips()
        .pipe(
          tap((res) => {
            this.arr = res[0].filter((tip) => tip.category === 'long-term');
            console.log(res);
            this.tipsSubject.next(this.arr);
          }),
          catchError((e) => {
            console.log(e.message);
            return of([]);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => element.unsubscribe());
    this.result.next('');
  }
}
