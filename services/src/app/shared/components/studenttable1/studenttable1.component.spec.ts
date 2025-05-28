import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studenttable1Component } from './studenttable1.component';

describe('Studenttable1Component', () => {
  let component: Studenttable1Component;
  let fixture: ComponentFixture<Studenttable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studenttable1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studenttable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
