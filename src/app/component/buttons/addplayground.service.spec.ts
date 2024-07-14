import { TestBed } from '@angular/core/testing';

import { AddplaygroundService } from './addplayground.service';

describe('AddplaygroundService', () => {
  let service: AddplaygroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddplaygroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
