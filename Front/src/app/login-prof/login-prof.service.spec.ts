import { TestBed } from '@angular/core/testing';

import { LoginProfService } from './login-prof.service';

describe('LoginProfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginProfService = TestBed.get(LoginProfService);
    expect(service).toBeTruthy();
  });
});
