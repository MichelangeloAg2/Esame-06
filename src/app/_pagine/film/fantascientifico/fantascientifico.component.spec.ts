import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantascientificoComponent } from './fantascientifico.component';

describe('FantascientificoComponent', () => {
  let component: FantascientificoComponent;
  let fixture: ComponentFixture<FantascientificoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantascientificoComponent]
    });
    fixture = TestBed.createComponent(FantascientificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
