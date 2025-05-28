import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BbSidebarComponent } from './bb-sidebar/bb-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BbSidebarComponent, // <- IMPORTANTE!
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'senac-riseup-2025';
}
