import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataSet, Graph3d } from 'vis';

@Component({
  selector: 'surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.css']
})
export class SurfaceComponent implements OnInit {

  @ViewChild("surfaceChart") surfaceContainer: ElementRef;
  container: any;
  graph3d: any;
  data: any;
  options: {};

  constructor() {
    this.populateData();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = this.surfaceContainer.nativeElement;
    this.graph3d = new Graph3d(this.container, this.data, this.options);
  }

  populateData() {
    // Create a DataSet (allows two way data-binding)
    this.data = new DataSet();
    // create some nice looking data with sin/cos
    var counter = 0;
    var steps = 50;  // number of datapoints will be steps*steps
    var axisMax = 314;
    var axisStep = axisMax / steps;
    for (var x = 0; x < axisMax; x+=axisStep) {
      for (var y = 0; y < axisMax; y+=axisStep) {
        var value = (Math.sin(x/50) * Math.cos(y/50) * 50 + 50);
        this.data.add({id:counter++,x:x,y:y,z:value,style:value});
      }
    }

    // specify options
    this.options = {
      width:  '500px',
      height: '500px',
      style: 'surface',
      showPerspective: true,
      showGrid: true,
      showShadow: false,
      keepAspectRatio: true,
      verticalRatio: 0.6
    };
  }
}
