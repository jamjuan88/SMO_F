import { TestBed } from '@angular/core/testing';

import { TipoDePreexistenciaService } from './tipo-de-preexistencia.service';

describe('TipoDePreexistenciaService', () => {
  let service: TipoDePreexistenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDePreexistenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
