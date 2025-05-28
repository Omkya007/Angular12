import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentform1Component } from './studentform1.component';

describe('Studentform1Component', () => {
  let component: Studentform1Component;
  let fixture: ComponentFixture<Studentform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Studentform1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
