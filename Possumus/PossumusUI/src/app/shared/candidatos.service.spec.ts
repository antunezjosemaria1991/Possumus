import { TestBed } from '@angular/core/testing';

import { CandidatosService } from './empleos.service';

describe('CandidatosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidatosService = TestBed.get(CandidatosService);
    expect(service).toBeTruthy();
  });
});
