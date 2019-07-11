import { TestBed } from '@angular/core/testing';

import { SingleGithubService } from './single-github.service';

describe('SingleGithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleGithubService = TestBed.get(SingleGithubService);
    expect(service).toBeTruthy();
  });
});
