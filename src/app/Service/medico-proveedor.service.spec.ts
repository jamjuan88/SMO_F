import { TestBed } from '@angular/core/testing';

import { MedicoProveedorService } from './medico-proveedor.service';

describe('MedicoProveedorService', () => {
  let service: MedicoProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
