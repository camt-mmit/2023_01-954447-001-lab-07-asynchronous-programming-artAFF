import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicInputDisplayComponent } from './dynamic-input-display.component';

describe('DynamicInputDisplayComponent', () => {
  let component: DynamicInputDisplayComponent;
  let fixture: ComponentFixture<DynamicInputDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicInputDisplayComponent]
    });
    fixture = TestBed.createComponent(DynamicInputDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
