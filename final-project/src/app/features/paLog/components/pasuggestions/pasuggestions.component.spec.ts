import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PASuggestionsComponent } from './pasuggestions.component';

describe('PASuggestionsComponent', () => {
  let component: PASuggestionsComponent;
  let fixture: ComponentFixture<PASuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PASuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PASuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
