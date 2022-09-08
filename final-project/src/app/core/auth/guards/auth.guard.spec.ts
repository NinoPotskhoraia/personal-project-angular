import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorizedGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthorizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(AuthorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
