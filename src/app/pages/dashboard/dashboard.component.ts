import { Component } from '@angular/core';
import { CardListComponent } from '../../card-list/card-list.component';
import { DashboardTopComponent } from '../../dashboard-top/dashboard-top.component';
import { DashboardWrapperComponent } from '../../dashboard-wrapper/dashboard-wrapper.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    CardListComponent,
    DashboardTopComponent,
    DashboardWrapperComponent
  ]
})
export class DashboardComponent {}
