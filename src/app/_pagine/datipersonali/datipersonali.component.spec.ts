import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatipersonaliComponent } from './datipersonali.component';

describe('DatipersonaliComponent', () => {
  let component: DatipersonaliComponent;
  let fixture: ComponentFixture<DatipersonaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatipersonaliComponent]
    });
    fixture = TestBed.createComponent(DatipersonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
