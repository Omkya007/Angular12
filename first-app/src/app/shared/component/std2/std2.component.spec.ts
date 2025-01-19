import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std2Component } from './std2.component';

describe('Std2Component', () => {
  let component: Std2Component;
  let fixture: ComponentFixture<Std2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
