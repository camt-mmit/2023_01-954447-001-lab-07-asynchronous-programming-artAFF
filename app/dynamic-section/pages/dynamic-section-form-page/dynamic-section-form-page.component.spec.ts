import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionFormPageComponent } from './dynamic-section-form-page.component';

describe('DynamicSectionFormPageComponent', () => {
  let component: DynamicSectionFormPageComponent;
  let fixture: ComponentFixture<DynamicSectionFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionFormPageComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
