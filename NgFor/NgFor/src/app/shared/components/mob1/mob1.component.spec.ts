import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mob1Component } from './mob1.component';

describe('Mob1Component', () => {
  let component: Mob1Component;
  let fixture: ComponentFixture<Mob1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mob1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mob1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
