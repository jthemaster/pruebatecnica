import { TestBed } from '@angular/core/testing';

import { ServiceConsumoService } from './service-consumo.service';

describe('ServiceConsumoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceConsumoService = TestBed.get(ServiceConsumoService);
    expect(service).toBeTruthy();
  });
});
