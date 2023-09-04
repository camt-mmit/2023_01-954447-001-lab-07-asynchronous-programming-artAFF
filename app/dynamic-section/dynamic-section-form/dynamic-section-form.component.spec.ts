import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionFormComponent } from './dynamic-section-form.component';

describe('DynamicSectionFormComponent', () => {
  let component: DynamicSectionFormComponent;
  let fixture: ComponentFixture<DynamicSectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionFormComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
