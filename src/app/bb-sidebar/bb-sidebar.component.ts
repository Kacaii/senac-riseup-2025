import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // importe o RouterModule

@Component({
  selector: 'app-bb-sidebar',
  standalone: true,
  imports: [RouterModule], // adicione aqui
  templateUrl: './bb-sidebar.component.html',
  styleUrls: ['./bb-sidebar.component.css']
})
export class BbSidebarComponent {}
