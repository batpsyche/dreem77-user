import { TestBed } from '@angular/core/testing';

import { AlliframeService } from './alliframe.service';

describe('AlliframeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlliframeService = TestBed.get(AlliframeService);
    expect(service).toBeTruthy();
  });
});
