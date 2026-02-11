import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginanontrovataComponent } from './paginanontrovata.component';

describe('PaginanontrovataComponent', () => {
  let component: PaginanontrovataComponent;
  let fixture: ComponentFixture<PaginanontrovataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginanontrovataComponent]
    });
    fixture = TestBed.createComponent(PaginanontrovataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
