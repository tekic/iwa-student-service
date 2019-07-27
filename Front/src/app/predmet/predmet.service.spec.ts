import { TestBed } from '@angular/core/testing';

import { PredmetService } from './predmet.service';

describe('PredmetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredmetService = TestBed.get(PredmetService);
    expect(service).toBeTruthy();
  });
});
