import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantascienzaComponent } from './fantascientifico.component';

describe('FantascienzaComponent', () => {
  let component: FantascienzaComponent;
  let fixture: ComponentFixture<FantascienzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantascienzaComponent]
    });
    fixture = TestBed.createComponent(FantascienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
