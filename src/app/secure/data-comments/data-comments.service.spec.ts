import { TestBed, inject } from '@angular/core/testing';

import { DataCommentsService } from './data-comments.service';

describe('DataCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCommentsService]
    });
  });

  it('should be created', inject([DataCommentsService], (service: DataCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
