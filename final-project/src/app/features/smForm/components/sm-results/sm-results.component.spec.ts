import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmResultsComponent } from './sm-results.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SmService } from '../../services/sm.service';

describe('SmResultsComponent', () => {
  let component: SmResultsComponent;
  let fixture: ComponentFixture<SmResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmResultsComponent],
      providers: [HttpClient, HttpHandler, SmService],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
