import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputDisplayPageComponent } from './dynamic-input-display-page.component';

describe('DynamicInputDisplayPageComponent', () => {
  let component: DynamicInputDisplayPageComponent;
  let fixture: ComponentFixture<DynamicInputDisplayPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicInputDisplayPageComponent]
    });
    fixture = TestBed.createComponent(DynamicInputDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
