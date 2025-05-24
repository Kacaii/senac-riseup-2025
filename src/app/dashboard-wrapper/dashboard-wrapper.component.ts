import { Component } from '@angular/core';
import { DashboardGraphComponent } from '../dashboard-graph/dashboard-graph.component';
import { DashboardRecentLogsComponent } from '../dashboard-recent-logs/dashboard-recent-logs.component';

@Component({
  selector: 'app-dashboard-wrapper',
  imports: [DashboardGraphComponent, DashboardRecentLogsComponent],
  templateUrl: './dashboard-wrapper.component.html',
  styleUrl: './dashboard-wrapper.component.css',
})
export class DashboardWrapperComponent {}
