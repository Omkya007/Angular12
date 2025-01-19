import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std1Component } from './std1.component';

describe('Std1Component', () => {
  let component: Std1Component;
  let fixture: ComponentFixture<Std1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
