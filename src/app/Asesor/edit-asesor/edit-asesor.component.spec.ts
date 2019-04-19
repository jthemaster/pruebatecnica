import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsesorComponent } from './edit-asesor.component';

describe('EditAsesorComponent', () => {
  let component: EditAsesorComponent;
  let fixture: ComponentFixture<EditAsesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAsesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
