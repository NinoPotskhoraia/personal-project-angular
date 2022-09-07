import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { ITip } from '../../interfaces/sm-interface';
import { SmService } from '../../services/sm.service';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmComponent implements OnInit {
  constructor(private smService: SmService) {}
  tipsSubject: BehaviorSubject<ITip[]> = new BehaviorSubject([{}] as ITip[]);
  arr: ITip[] = [];
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.tipsSubject = this.smService.tipsSubject;
    this.smService.postTips(this.smService.tips).subscribe();
  }

  public moodRegulationTips(): void {
    this.subscriptions.push(
      this.smService
        .getTips()
        .pipe(
          tap((res) => {
            this.arr = res[0].filter((tip) => tip.category === 'mood');
            console.log(res);
            this.tipsSubject.next(this.arr);
          })
        )
        .subscribe()
    );
  }

  public physicalDiscomfortTips(): void {
    this.subscriptions.push(
      this.smService
        .getTips()
        .pipe(
          tap((res) => {
            this.arr = res[0].filter(
              (tip) => tip.category === 'physical-discomfort'
            );
            console.log(res);
            this.tipsSubject.next(this.arr);
          })
        )
        .subscribe()
    );
  }

  public behaviorTips(): void {
    this.subscriptions.push(
      this.smService
        .getTips()
        .pipe(
          tap((res) => {
            this.arr = res[0].filter((tip) => tip.category === 'behavior');
            console.log(res);
            this.tipsSubject.next(this.arr);
          })
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((element) => element.unsubscribe());
  }
}
