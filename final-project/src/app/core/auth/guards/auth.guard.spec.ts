import { TestBed } from '@angular/core/testing';

import { AuthorizedGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthorizedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthorizedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
