import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sm-chart',
  templateUrl: './sm-chart.component.html',
  styleUrls: ['./sm-chart.component.scss'],
})
export class SmChartComponent implements OnInit {
  constructor() {}

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

  ngOnInit(): void {}
}
