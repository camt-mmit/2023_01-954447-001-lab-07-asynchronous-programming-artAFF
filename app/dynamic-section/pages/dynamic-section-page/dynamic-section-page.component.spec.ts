import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionPageComponent } from './dynamic-section-page.component';

describe('DynamicSectionPageComponent', () => {
  let component: DynamicSectionPageComponent;
  let fixture: ComponentFixture<DynamicSectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionPageComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
