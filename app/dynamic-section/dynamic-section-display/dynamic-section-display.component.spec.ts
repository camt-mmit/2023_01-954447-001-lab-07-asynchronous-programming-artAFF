import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionDisplayComponent } from './dynamic-section-display.component';

describe('DynamicSectionDisplayComponent', () => {
  let component: DynamicSectionDisplayComponent;
  let fixture: ComponentFixture<DynamicSectionDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionDisplayComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
