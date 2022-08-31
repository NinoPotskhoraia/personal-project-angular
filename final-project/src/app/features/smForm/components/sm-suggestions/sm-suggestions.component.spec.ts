import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmSuggestionsComponent } from './sm-suggestions.component';

describe('SmSuggestionsComponent', () => {
  let component: SmSuggestionsComponent;
  let fixture: ComponentFixture<SmSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
