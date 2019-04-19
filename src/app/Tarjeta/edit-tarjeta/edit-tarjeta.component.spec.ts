import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarjetaComponent } from './edit-tarjeta.component';

describe('EditTarjetaComponent', () => {
  let component: EditTarjetaComponent;
  let fixture: ComponentFixture<EditTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
