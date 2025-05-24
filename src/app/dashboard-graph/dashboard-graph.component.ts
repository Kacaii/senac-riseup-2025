import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard-graph',
  imports: [],
  templateUrl: './dashboard-graph.component.html',
  styleUrl: './dashboard-graph.component.css',
})
export class DashboardGraphComponent {
  title = 'ng-chart';
  chart: any = [];

  constructor() {}
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['00:00', '06:00', '12:00', '18:00', '23:00'],
        datasets: [
          {
            label: 'HTTP 200',
            borderColor: '#28a745',
            data: [120, 300, 450, 350, 400],
            fill: false,
          },
          {
            label: 'Erro 4XX',
            borderColor: '#fd7e14',
            data: [60, 100, 150, 100, 80],
            fill: false,
          },
          {
            label: 'Timeout',
            borderColor: '#ffc107',
            data: [20, 40, 35, 25, 30],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: true } },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
