import { TestBed } from '@angular/core/testing';

import { SerietvService } from './serietv.service';

describe('SerietvService', () => {
  let service: SerietvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerietvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
