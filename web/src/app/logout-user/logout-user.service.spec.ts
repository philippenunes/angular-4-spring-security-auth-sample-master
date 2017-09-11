import { TestBed, inject } from '@angular/core/testing';

import { LogoutUserService } from './logout-user.service';

describe('LogoutUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogoutUserService]
    });
  });

  it('should be created', inject([LogoutUserService], (service: LogoutUserService) => {
    expect(service).toBeTruthy();
  }));
});
