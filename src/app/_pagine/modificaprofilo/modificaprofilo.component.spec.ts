import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaprofiloComponent } from './modificaprofilo.component';

describe('ModificaprofiloComponent', () => {
  let component: ModificaprofiloComponent;
  let fixture: ComponentFixture<ModificaprofiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaprofiloComponent]
    });
    fixture = TestBed.createComponent(ModificaprofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
