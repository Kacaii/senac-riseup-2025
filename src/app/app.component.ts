import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BbSidebarComponent } from './bb-sidebar/bb-sidebar.component';
import { CardListComponent } from './card-list/card-list.component';
import { DashboardTopComponent } from './dashboard-top/dashboard-top.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BbSidebarComponent,
    CardListComponent,
    DashboardTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'senac-riseup-2025';
}
