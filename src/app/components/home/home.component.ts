import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Completed'], ['Inprogress'], ['Overdue']];
  public pieChartData: SingleDataSet = [500, 300, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void { }

  showFiller = false;

  dashboard: any[] = [
    {
      task: "Resources Screen",
      startdate: "29/08/2017",
      enddate: "30/08/2017"
    },
    {
      task: "Dashboard",
      startdate: "30/08/2017",
      enddate: "31/08/2017"
    },
    {
      task: "Tasks Screen",
      startdate: "30/08/2017",
      enddate: "30/08/2017"
    },
  ]
  performance: any[] = [
    {
      task: "Resources Screen ",
      status: "In Progress"
    },
    {
      task: "Dashboard ",
      status: "Completed"
    },
    {
      task: "Task 1 ",
      status: "Assigned"
    },
  ]
}
