import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

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

  ngOnInit(): void {

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
                  ['Sleep',    7]]

    this.config2 = new PieChartConfig('My Daily Activities at 30 years old', 0.2);
    this.elementId2 = 'myPieChart2';

    //ComboChart Data & Config
    this.data3 = [['Task', '20 years old', '30 years old'],
      ['Work',     0, 11],
      ['Eat',      3, 2],
      ['Commute',  2, 2],
      ['Watch TV', 5, 2],
      ['Video games', 4, 0],
      ['Sleep',    10, 7]]
    /*
    this.data3 = [
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    ];
    */
    this.config3 = new ComboChartConfig('My Daily Activities showing 20 vs 30 years old', "Hours per Day", "Activities");
    this.elementId3 = 'myComboChart1';


    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };
  }

}
