import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzioneComponent } from './azione.component';

describe('AzioneComponent', () => {
  let component: AzioneComponent;
  let fixture: ComponentFixture<AzioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzioneComponent]
    });
    fixture = TestBed.createComponent(AzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
