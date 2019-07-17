import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMoviePage } from './detalle-movie.page';

describe('DetalleMoviePage', () => {
  let component: DetalleMoviePage;
  let fixture: ComponentFixture<DetalleMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMoviePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
