import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardRecentLogsComponent } from "./dashboard-recent-logs.component";

describe("DashboardRecentLogsComponent", () => {
  let component: DashboardRecentLogsComponent;
  let fixture: ComponentFixture<DashboardRecentLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRecentLogsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardRecentLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
