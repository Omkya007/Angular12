import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdTbComponent } from './std-tb.component';

describe('StdTbComponent', () => {
  let component: StdTbComponent;
  let fixture: ComponentFixture<StdTbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdTbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdTbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
