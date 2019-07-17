import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMoviesPage } from './listado-movies.page';

describe('ListadoMoviesPage', () => {
  let component: ListadoMoviesPage;
  let fixture: ComponentFixture<ListadoMoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMoviesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
