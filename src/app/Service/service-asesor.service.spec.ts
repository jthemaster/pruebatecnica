import { TestBed } from '@angular/core/testing';

import { ServiceAsesorService } from './service-asesor.service';

describe('ServiceAsesorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAsesorService = TestBed.get(ServiceAsesorService);
    expect(service).toBeTruthy();
  });
});
