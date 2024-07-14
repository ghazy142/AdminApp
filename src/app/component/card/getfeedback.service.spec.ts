import { TestBed } from '@angular/core/testing';

import { GetfeedbackService } from './getfeedback.service';

describe('GetfeedbackService', () => {
  let service: GetfeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetfeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
