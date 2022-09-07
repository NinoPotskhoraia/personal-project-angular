import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  of,
  Subject,
  Subscription,
  tap,
} from 'rxjs';
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
      this.result.next('none');
    } else if (this.markedSubject.value <= 4) {
      this.result.next('slight');
    } else if (this.markedSubject.value <= 6) {
      this.result.next('moderate');
    } else if (this.markedSubject.value >= 6) {
      this.result.next('hight');
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
  }
}
