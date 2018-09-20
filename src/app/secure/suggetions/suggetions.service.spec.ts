import { TestBed, inject } from '@angular/core/testing';

import { SuggetionsService } from './suggetions.service';

describe('SuggetionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggetionsService]
    });
  });

  it('should be created', inject([SuggetionsService], (service: SuggetionsService) => {
    expect(service).toBeTruthy();
  }));
});
