import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConsumoComponent } from './listar-consumo.component';

describe('ListarConsumoComponent', () => {
  let component: ListarConsumoComponent;
  let fixture: ComponentFixture<ListarConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
