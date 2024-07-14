import { TestBed } from '@angular/core/testing';

import { GetplaygroundService } from './getplayground.service';

describe('GetplaygroundService', () => {
  let service: GetplaygroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetplaygroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
