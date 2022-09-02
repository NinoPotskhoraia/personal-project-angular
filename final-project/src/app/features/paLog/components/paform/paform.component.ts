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
    // this.choosing = this.paService.choosing;
  }

  // choosing = new BehaviorSubject(true);
  editing = new BehaviorSubject(true);

  aerobicsForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    timeUnit: new FormControl('', Validators.required),
  });
  resistanceForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    timeUnit: new FormControl('', Validators.required),
  });
  flexibilityForm = new FormGroup({
    activity: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    timeUnit: new FormControl('', Validators.required),
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
    this.aerobicsForm.reset();
    this.resistanceForm.reset();
    this.flexibilityForm.reset();
    console.log(this.arr);
  }

  public onAddClick() {
    this.editing.next(true);
  }
}
