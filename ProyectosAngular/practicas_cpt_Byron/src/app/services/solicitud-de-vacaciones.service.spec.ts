import { TestBed } from '@angular/core/testing';
import { SolicitudDeVacacionesService } from './solicitud-de-vacaciones.service';

describe('SolicitudVacacionesService', () => {
  let service: SolicitudDeVacacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudDeVacacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
