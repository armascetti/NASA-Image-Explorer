import { TestBed } from '@angular/core/testing';
import { Mars } from './mars';

describe('Mars', () => {
  let service: Mars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
