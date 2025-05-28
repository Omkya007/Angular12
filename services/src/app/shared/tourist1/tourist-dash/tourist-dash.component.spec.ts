import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristDashComponent } from './tourist-dash.component';

describe('TouristDashComponent', () => {
  let component: TouristDashComponent;
  let fixture: ComponentFixture<TouristDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
