import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocandinaComponent } from './locandina.component';

describe('LocandinaComponent', () => {
  let component: LocandinaComponent;
  let fixture: ComponentFixture<LocandinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocandinaComponent]
    });
    fixture = TestBed.createComponent(LocandinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
