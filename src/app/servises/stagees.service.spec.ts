import { TestBed } from '@angular/core/testing';

import { StageesService } from './stagees.service';

describe('StageesService', () => {
  let service: StageesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
