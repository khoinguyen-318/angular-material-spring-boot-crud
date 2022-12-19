import { TestBed } from '@angular/core/testing';

import { LogicalprocessService } from './logicalprocess.service';

describe('LogicalprocessService', () => {
  let service: LogicalprocessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicalprocessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
