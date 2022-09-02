import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PALogComponent } from './palog.component';

describe('PALogComponent', () => {
  let component: PALogComponent;
  let fixture: ComponentFixture<PALogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PALogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PALogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
