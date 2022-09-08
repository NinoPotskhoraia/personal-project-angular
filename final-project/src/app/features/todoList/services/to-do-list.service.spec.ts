import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ToDoListService } from './to-do-list.service';

describe('ToDoListService', () => {
  let service: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(ToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
