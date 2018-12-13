import { AdminComponent } from './Admin/admin.component';
import { GalleryComponent } from './Gallery/gallery.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './Dashboard/Charts/combochart.component'
import { DashboardComponent } from './Dashboard/dashboard.component';
import { GoogleComboChartService } from './Services/google-combo-chart.service';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { DataService } from './Services/data.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './Dashboard/Charts/piechart.component'
import { VisComponent } from './Dashboard/Charts/vis.component';
import { VistimelineComponent } from './Dashboard/Charts/vistimeline.component';
import { SurfaceComponent } from './Dashboard/Charts/surface.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { TextFieldAutosizeTextareaExample } from './Material/text-field-autosize-textarea-example';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    GalleryComponent,
    ComboChartComponent,
    VisComponent,
    VistimelineComponent,
    SurfaceComponent,
    TextFieldAutosizeTextareaExample,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GoogleComboChartService,GooglePieChartService, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
