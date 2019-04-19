import { TestBed } from '@angular/core/testing';

import { ServiceTarjetaService } from './service-tarjeta.service';

describe('ServiceTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceTarjetaService = TestBed.get(ServiceTarjetaService);
    expect(service).toBeTruthy();
  });
});
