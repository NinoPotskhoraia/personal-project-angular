import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAFormComponent } from './paform.component';

describe('PAFormComponent', () => {
  let component: PAFormComponent;
  let fixture: ComponentFixture<PAFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
