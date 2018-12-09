import { AdminComponent } from './Admin/admin.component';
import { GalleryComponent } from './Gallery/gallery.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './Dashboard/Charts/combochart.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
//import { DataTableModule } from 'angular-4-data-table';
import { FormsModule }   from '@angular/forms';
import { GoogleComboChartService } from './Services/google-combo-chart.service';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './Dashboard/Charts/piechart.component'
import { VisComponent } from './Dashboard/Charts/vis.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    GalleryComponent,
    ComboChartComponent,
    VisComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//  DataTableModule ,
    FormsModule
  ],
  providers: [GoogleComboChartService,GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
