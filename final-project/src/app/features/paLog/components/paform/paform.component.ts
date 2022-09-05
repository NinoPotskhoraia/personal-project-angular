import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IPlan } from '../../interfaces/pa-log-interface';
import { PaService } from '../../services/pa.service';

@Component({
  selector: 'app-paform',
  templateUrl: './paform.component.html',
  styleUrls: ['./paform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PAFormComponent implements OnInit {
  constructor(private paService: PaService) {}

  arr: IPlan[] = [];

  @Output() customWorkout = new EventEmitter<IPlan[]>();

  ngOnInit(): void {
    this.editing = this.paService.editing;
    this.choosing = this.paService.choosing;
    this.done = this.paService.done;
  }

  choosing = new BehaviorSubject(true);
  editing = new BehaviorSubject(true);
  done = new BehaviorSubject(false);

  aerobicsForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl(''),
    timeUnit: new FormControl(''),
  });
  resistanceForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl(''),
    timeUnit: new FormControl(''),
  });
  flexibilityForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl(''),
    timeUnit: new FormControl(''),
  });

  public onConfirm() {
    if (this.aerobicsForm.value.activity) {
      this.arr.push(this.aerobicsForm.value);
    }
    if (this.resistanceForm.value.activity) {
      this.arr.push(this.resistanceForm.value);
    }
    if (this.flexibilityForm.value.activity) {
      this.arr.push(this.flexibilityForm.value);
    }
    this.customWorkout.emit(this.arr);
    this.editing.next(false);
    this.done.next(true);
    this.aerobicsForm.reset();
    this.resistanceForm.reset();
    this.flexibilityForm.reset();
    console.log(this.aerobicsForm);
  }

  public onAddClick() {
    this.editing.next(true);
    this.done.next(false);
  }
}
