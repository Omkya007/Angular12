import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDashComponent } from './trip-dash.component';

describe('TripDashComponent', () => {
  let component: TripDashComponent;
  let fixture: ComponentFixture<TripDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
