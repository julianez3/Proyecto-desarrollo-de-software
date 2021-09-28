import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoVentasComponent } from './estado-ventas.component';

describe('EstadoVentasComponent', () => {
  let component: EstadoVentasComponent;
  let fixture: ComponentFixture<EstadoVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
