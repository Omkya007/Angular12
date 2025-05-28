import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristCardComponent } from './tourist-card.component';

describe('TouristCardComponent', () => {
  let component: TouristCardComponent;
  let fixture: ComponentFixture<TouristCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouristCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
