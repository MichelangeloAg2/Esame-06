import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimazioneComponent } from './animazione.component';

describe('AnimazioneComponent', () => {
  let component: AnimazioneComponent;
  let fixture: ComponentFixture<AnimazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimazioneComponent]
    });
    fixture = TestBed.createComponent(AnimazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
