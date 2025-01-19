import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile1Component } from './mobile1.component';

describe('Mobile1Component', () => {
  let component: Mobile1Component;
  let fixture: ComponentFixture<Mobile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mobile1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
