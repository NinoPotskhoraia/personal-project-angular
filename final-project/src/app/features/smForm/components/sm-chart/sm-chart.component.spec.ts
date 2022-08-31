import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmChartComponent } from './sm-chart.component';

describe('SmChartComponent', () => {
  let component: SmChartComponent;
  let fixture: ComponentFixture<SmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
