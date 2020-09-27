import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;

  constructor() {}

  ngOnInit() {
const canvas = document.getElementById('myChart') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const data = {
  labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'July'],
  datasets: [{
    label: 'Job1',
    backgroundColor: '#344675',
    data: [3, 7, 4, 4, 8, 2, 9]
  }, {
    label: 'Job2',
    backgroundColor: '#ff4040',
    data: [4, 3, 5, 1, 5, 4, 8]
  }, {
    label: 'Job3',
    backgroundColor: 'green',
    data: [7, 2, 6, 5, 7, 4, 6]
  }]
};

const myBarChart = new Chart(ctx, {
  type: 'bar',
  data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
        }
      }]
    }
  }
});


}
}
