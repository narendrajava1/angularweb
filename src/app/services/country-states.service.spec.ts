import { TestBed } from '@angular/core/testing';

import { CountryStatesService } from './country-states.service';

describe('CountryStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryStatesService = TestBed.get(CountryStatesService);
    expect(service).toBeTruthy();
  });
});
