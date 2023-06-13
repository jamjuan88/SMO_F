import { TestBed } from '@angular/core/testing';

import { PreexistenciaService } from './preexistencia.service';

describe('PreexistenciaService', () => {
  let service: PreexistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreexistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
