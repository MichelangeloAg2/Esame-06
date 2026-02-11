import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFilmComponent } from './dashboard-film.component';

describe('DashboardFilmComponent', () => {
  let component: DashboardFilmComponent;
  let fixture: ComponentFixture<DashboardFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardFilmComponent]
    });
    fixture = TestBed.createComponent(DashboardFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
