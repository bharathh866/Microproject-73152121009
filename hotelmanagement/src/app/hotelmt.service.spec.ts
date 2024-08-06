import { TestBed } from '@angular/core/testing';

import { HotelmtService } from './hotelmt.service';

describe('HotelmtService', () => {
  let service: HotelmtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelmtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
