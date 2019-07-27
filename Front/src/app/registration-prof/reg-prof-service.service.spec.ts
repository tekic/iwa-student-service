import { TestBed } from '@angular/core/testing';

import { RegProfServiceService } from './reg-prof-service.service';

describe('RegProfServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegProfServiceService = TestBed.get(RegProfServiceService);
    expect(service).toBeTruthy();
  });
});
