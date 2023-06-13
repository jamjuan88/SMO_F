import { TestBed } from '@angular/core/testing';

import { ProveedorAptitudService } from './proveedor-aptitud.service';

describe('ProveedorAptitudService', () => {
  let service: ProveedorAptitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorAptitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
