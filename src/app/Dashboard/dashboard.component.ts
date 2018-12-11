import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
import { DataService } from '../Services/data.service';
import * as _ from 'lodash';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Google Charts';

  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;

  data3: any[];
  config3: ComboChartConfig;
  elementId3: String;

  constructor( private dataService: DataService) {
    //this.doComboChart();
  }

  ngOnInit(): void {
    //this.createChart2();
  }

  ngAfterViewInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getActivityData()
      .subscribe(response => this.createChart(response));
  }

  createChart(response) {
    console.log( response );
    this.data1 = _.get( response, "twenty");
    console.log( this.data1 );
    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.2);
    this.elementId1 = 'myPieChart1';
    console.log( this.config1 );


    this.data2 = _.get( response, "thirty");
    console.log( this.data2 );
    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.2);
    this.elementId2 = 'myPieChart2';
    console.log( this.config2 );

    this.data3 = [['Task', '20 years old', '30 years old'],
      ['Work',     0, 11],
      ['Eat',      3, 2],
      ['Commute',  2, 2],
      ['Watch TV', 5, 2],
      ['Video games', 4, 0],
      ['Sleep',    10, 7]];

    this.config3 = new ComboChartConfig('My Daily Activities showing 20 vs 30 years old', "Hours per Day", "Activities");
    this.elementId3 = 'myComboChart1';
    console.log( this.config3 );

  }

  doComboChart() {
    this.data3 = [['Task', '20 years old', '30 years old'],
      ['Work',     0, 11],
      ['Eat',      3, 2],
      ['Commute',  2, 2],
      ['Watch TV', 5, 2],
      ['Video games', 4, 0],
      ['Sleep',    10, 7]];

    this.config3 = new ComboChartConfig('My Daily Activities showing 20 vs 30 years old', "Hours per Day", "Activities");
    this.elementId3 = 'myComboChart1';
    console.log( this.config3 );
  }

  createChart2() {
    //Piechart1 Data & Config
    this.data1 = [['Task', 'Hours per Day'],
    ['Eat',      3],
    ['Commute',  2],
    ['Watch TV', 5],
    ['Video games', 4],
    ['Sleep',    10]];

    this.config1 = new PieChartConfig('My Daily Activities at 20 years old', 0.2);
    this.elementId1 = 'myPieChart1';

    //Piechart2 Data & Config
    this.data2 = [['Task', 'Hours per Day'],
                  ['Work',     11],
                  ['Eat',      2],
                  ['Commute',  2],
                  ['Watch TV', 2],
                  ['Sleep',    7]];

    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.2);
    this.elementId2 = 'myPieChart2';

    //ComboChart Data & Config
    this.data3 = [['Task', '20 years old', '30 years old'],
      ['Work',     0, 11],
      ['Eat',      3, 2],
      ['Commute',  2, 2],
      ['Watch TV', 5, 2],
      ['Video games', 4, 0],
      ['Sleep',    10, 7]];

    this.config3 = new ComboChartConfig('My Daily Activities showing 20 vs 30 years old', "Hours per Day", "Activities");
    this.elementId3 = 'myComboChart1';

  }

}
