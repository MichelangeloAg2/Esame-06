import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieCardComponent } from './serie-card.component';

describe('SerieCardComponent', () => {
  let component: SerieCardComponent;
  let fixture: ComponentFixture<SerieCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerieCardComponent]
    });
    fixture = TestBed.createComponent(SerieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
