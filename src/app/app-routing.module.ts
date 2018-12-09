import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }   from './Admin/admin.component';
import { GalleryComponent }   from './Gallery/gallery.component';
import { DashboardComponent }   from './Dashboard/dashboard.component';
import { NgModule }             from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'admin',  component: AdminComponent },
  { path: 'gallery',  component: GalleryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
