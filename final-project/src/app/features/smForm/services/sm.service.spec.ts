import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SmService } from './sm.service';

describe('SmService', () => {
  let service: SmService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(SmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
