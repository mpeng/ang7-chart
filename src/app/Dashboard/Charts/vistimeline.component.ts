import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSet, Timeline } from 'vis';
import { Timelinedata } from '../../Models/Timelinedata';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-vistimeline',
  templateUrl: './vistimeline.component.html',
  styleUrls: ['./vistimeline.component.css']
})

export class VistimelineComponent implements OnInit {
  @ViewChild("visjsTimeline") timelineContainer: ElementRef;
  tlContainer: any;
  timeline: any;
  data: any;
  timelinedata: Timelinedata[];
  options: {};

  constructor( private dataService: DataService) {
    this.getData();
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  getData(): void {
    this.dataService.getData()
      .subscribe(response => this.getTimelineData(response));
  }

  getTimelineData(response) {

    /*
    this.data = new DataSet([
      {id: 1, content: 'exam 1', start: '2018-04-20', title: "total images 6"},
      {id: 2, content: 'exam 2', start: '2018-04-14', title: "total images 6"},
      {id: 3, content: 'exam 3', start: '2018-04-18'},
      {id: 4, content: 'exam 4', start: '2018-04-16', end: '2013-04-19'},
      {id: 5, content: 'exam 5', start: '2018-04-25'},
      {id: 6, content: 'exam 6', start: '2018-04-27'},

      {id: 7, content: 'exam 1', start: '2018-05-01'},
      {id: 8, content: 'exam 2', start: '2018-05-05'},
      {id: 9, content: 'exam 3', start: '2018-05-12'},
      {id: 10, content: 'exam 4', start: '2018-05-15', end: '2013-04-19'},
      {id: 11, content: 'exam 5', start: '2018-05-25'},
      {id: 12, content: 'exam 6', start: '2018-05-27'},
    ]);
    */

    console.log( response );
    this.data = new DataSet( response );

    this.options = {
      editable: true,
      showTooltips: true,
      tooltip: {
        followMouse: true,
        overflowMethod: 'cap'
      },
      margin: {
        item: 20,
        axis: 40
      }
    };

    this.tlContainer = this.timelineContainer.nativeElement;
    this.timeline = new Timeline(this.tlContainer, this.data, {});
  }
}
