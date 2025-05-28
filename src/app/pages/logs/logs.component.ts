import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  standalone: true,
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  imports: [CommonModule],
})
export class LogsComponent {
  logs = [
    { timestamp: '2025-05-28 14:23:11', level: 'ERROR', message: 'Falha ao acessar banco de dados.' },
    { timestamp: '2025-05-28 14:24:01', level: 'INFO', message: 'Usuário admin acessou o painel.' },
    { timestamp: '2025-05-28 14:25:45', level: 'WARN', message: 'Tentativa de login inválida detectada.' },
  ];
}

