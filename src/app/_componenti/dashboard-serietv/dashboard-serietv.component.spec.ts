import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSerietvComponent } from './dashboard-serietv.component';

describe('DashboardSerietvComponent', () => {
  let component: DashboardSerietvComponent;
  let fixture: ComponentFixture<DashboardSerietvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSerietvComponent]
    });
    fixture = TestBed.createComponent(DashboardSerietvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
