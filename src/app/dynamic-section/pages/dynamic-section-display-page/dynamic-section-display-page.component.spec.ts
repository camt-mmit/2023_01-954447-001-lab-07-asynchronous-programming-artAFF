import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionDisplayPageComponent } from './dynamic-section-display-page.component';

describe('DynamicSectionDisplayPageComponent', () => {
  let component: DynamicSectionDisplayPageComponent;
  let fixture: ComponentFixture<DynamicSectionDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionDisplayPageComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
