import { Component, OnInit } from '@angular/core';
import { Chart,registerables, scales } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
  lights = [
    {
      name:'L1',
      status:false
    },
    {
      name:'L2',
      status:false
    },
    {
      name:'L3',
      status:false
    },
    {
      name:'L4',
      status:false
    },
    {
      name:'L5',
      status:false
    },
    {
      name:'L6',
      status:false
    },
    {
      name:'L7',
      status:false
    },
    {
      name:'L8',
      status:false
    },
    {
      name:'L9',
      status:false
    },
    {
      name:'L10',
      status:false
    },
    {
      name:'LED',
      status:false
    }, 
  ]

  AC=[
    {
      name:'AC',
      status:false
    },
  ]

  projecter=[
    {
      name:'PJR',
      status:false
    },
  ]

  doors=[
    {
      name:'DOOR',
      status:false
    },
    {
      name:'ACCESS',
      status:false
    },
  ]

  fans=[
    {
      name:'F1',
      status:false
    },
    {
      name:'F2',
      status:false
    },
    {
      name:'F3',
      status:false
    },
    {
      name:'F4',
      status:false
    },
  ]

  plugs=[
    {
      name:'PB1',
      status:false
    },
    {
      name:'PB2',
      status:false
    },
    {
      name:'PB3',
      status:false
    },
    {
      name:'PB4',
      status:false
    },
    {
      name:'PB5',
      status:false
    },
    {
      name:'PB6',
      status:false
    },
    {
      name:'PB7',
      status:false
    },
    {
      name:'PB8',
      status:false
    },
    
    {
      name:'PB9',
      status:false
    },
    {
      name:'PB10',
      status:false
    },
    {
      name:'PB11',
      status:false
    },
    {
      name:'PB12',
      status:false
    },
    {
      name:'PB13',
      status:false
    },
    {
      name:'PB14',
      status:false
    },
    {
      name:'PB15',
      status:false
    },
    {
      name:'PB16',
      status:false
    },
    {
      name:'PB17',
      status:false
    },
    {
      name:'PB18',
      status:false
    },
    
    {
      name:'PB19',
      status:false
    },
    {
      name:'PB20',
      status:false
    },
    {
      name:'PB21',
      status:false
    },
    {
      name:'PB22',
      status:false
    },
    {
      name:'PB23',
      status:false
    },
    {
      name:'PB24',
      status:false
    },
    {
      name:'PB25',
      status:false
    },
    {
      name:'PB26',
      status:false
    },
    {
      name:'PB27',
      status:false
    },
    {
      name:'PB28',
      status:false
    },
    
    {
      name:'PB29',
      status:false
    },
    {
      name:'PB30',
      status:false
    },
    {
      name:'PB31',
      status:false
    },
    {
      name:'PB32',
      status:false
    },
    {
      name:'PB33',
      status:false
    },
    {
      name:'PB34',
      status:false
    },
    {
      name:'PB35',
      status:false
    },
  ]
  
  ngOnInit(){
    this.generateChart();
    this.generateChart1();
    this.generateChart2();
  }

  generateChart(){
    const ctx = document.getElementById('firstChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13],
        datasets: [{
          label: 'of Watts',
          data: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
          fill: true,
          backgroundColor:'rgba(143,220,232,0.5)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }, 
      options:{
        scales:{
          x:{
            ticks:{
              font:{
                size:20
              },
            },
          },
          y:{
            beginAtZero:true,
            ticks:{
              stepSize:1000,
              font:{
                size:25
              }
            },
            min:0,
            max:3000
          }
        }
      }
    });
  }

  generateChart1(){
    const ctx = document.getElementById('secondChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13],
        datasets: [{
          label: 'of Darkness',
          data: [2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000],
          fill: true,
          backgroundColor:'rgba(143,220,232,0.5)',
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }, 
      options:{
        scales:{
          x:{
            ticks:{
              font:{
                size:20
              },
            },
          },
          y:{
            beginAtZero:true,
            ticks:{
              stepSize:1000,
              font:{
                size:25
              }
            },
            min:0,
            max:3000
          }
        }
      }
    });
  }

  generateChart2(){
    const ctx = document.getElementById('thirdChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: [14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.12,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13,14.13],
        datasets: [
          {
          label: 'of tempreture',
          data: [35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35],
          backgroundColor:'rgba(239,137,205,0.5)',
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
          },
          {
            label: 'of Humidity',
            data: [55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55,55],
            fill: true,
            backgroundColor:'rgba(143,220,232,0.5)',
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            },

      ]
      }, 
      options:{
        scales:{
          x:{
            ticks:{
              font:{
                size:20
              },
            },
          },
          y:{
            beginAtZero:true,
            ticks:{
              stepSize:20,
              font:{
                size:25
              }
            },
            min:0,
            max:60
          }
        }
      }
    });
  }
}
