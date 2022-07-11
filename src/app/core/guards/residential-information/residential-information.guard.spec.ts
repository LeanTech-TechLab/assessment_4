import { TestBed } from '@angular/core/testing';

import { ResidentialInformationGuard } from './residential-information.guard';

describe('ResidentialInformationGuard', () => {
  let guard: ResidentialInformationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResidentialInformationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
