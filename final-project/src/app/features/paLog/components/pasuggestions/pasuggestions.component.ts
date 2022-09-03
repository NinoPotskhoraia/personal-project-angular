import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../../interfaces/pa-log-interface';
import { PaService } from '../../services/pa.service';

@Component({
  selector: 'app-pasuggestions',
  templateUrl: './pasuggestions.component.html',
  styleUrls: ['./pasuggestions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PASuggestionsComponent implements OnInit {
  constructor(private paService: PaService) {}

  suggestion = new BehaviorSubject(false);
  choosing = new BehaviorSubject(true);
  editing = new BehaviorSubject(true);

  paRoutine: BehaviorSubject<IPlan[]> = new BehaviorSubject([] as IPlan[]);

  @Output() aerobics = new EventEmitter();
  @Output() weight = new EventEmitter();
  @Output() strength = new EventEmitter();
  @Output() flexibility = new EventEmitter();
  @Output() mentalHealth = new EventEmitter();
  @Output() approved = new EventEmitter();

  ngOnInit(): void {
    this.paRoutine = this.paService.paRoutine;
    this.choosing = this.paService.choosing;
  }

  onAerobicClick() {
    this.suggestion.next(true);
    this.aerobics.emit();
  }

  onWeightLossClick() {
    this.suggestion.next(true);
    this.weight.emit();
  }

  onStrengthClick() {
    this.suggestion.next(true);
    this.strength.emit();
  }

  onFlexibilityClick() {
    this.suggestion.next(true);
    this.flexibility.emit();
  }

  onMentalHealthClick() {
    this.suggestion.next(true);
    this.mentalHealth.emit();
  }

  onApprove() {
    this.suggestion.next(false);
    this.approved.emit();
  }
}
