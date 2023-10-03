import { TestBed } from '@angular/core/testing';

import { CartCounterService } from './cart-counter.service';

describe('CartCounterService', () => {
  let service: CartCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
