import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommediaComponent } from './commedia.component';

describe('CommediaComponent', () => {
  let component: CommediaComponent;
  let fixture: ComponentFixture<CommediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommediaComponent]
    });
    fixture = TestBed.createComponent(CommediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
