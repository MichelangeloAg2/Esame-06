import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrammaticoComponent } from './drammatico.component';

describe('DrammaticoComponent', () => {
  let component: DrammaticoComponent;
  let fixture: ComponentFixture<DrammaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrammaticoComponent]
    });
    fixture = TestBed.createComponent(DrammaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
