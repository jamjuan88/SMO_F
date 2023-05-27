import { TestBed } from '@angular/core/testing';

import { EstadoEmplService } from './estado-empl.service';

describe('EstadoEmplService', () => {
  let service: EstadoEmplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoEmplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
