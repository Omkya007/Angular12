import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdFComponent } from './std-f.component';

describe('StdFComponent', () => {
  let component: StdFComponent;
  let fixture: ComponentFixture<StdFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
