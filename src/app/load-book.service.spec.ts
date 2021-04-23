import { TestBed } from '@angular/core/testing';

import { LoadBookService } from './load-book.service';

describe('LoadBookService', () => {
  let service: LoadBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
