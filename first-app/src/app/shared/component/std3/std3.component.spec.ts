import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Std3Component } from './std3.component';

describe('Std3Component', () => {
  let component: Std3Component;
  let fixture: ComponentFixture<Std3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Std3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Std3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
