import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPagamentiComponent } from './dashboard-pagamenti.component';

describe('DashboardPagamentiComponent', () => {
  let component: DashboardPagamentiComponent;
  let fixture: ComponentFixture<DashboardPagamentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPagamentiComponent]
    });
    fixture = TestBed.createComponent(DashboardPagamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
