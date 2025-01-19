import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDComponent } from './std-d.component';

describe('StdDComponent', () => {
  let component: StdDComponent;
  let fixture: ComponentFixture<StdDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
