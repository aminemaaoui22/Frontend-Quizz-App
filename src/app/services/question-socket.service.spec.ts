import { TestBed } from '@angular/core/testing';

import { QuestionSocketService } from './question-socket.service';

describe('QuestionSocketService', () => {
  let service: QuestionSocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionSocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
