import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminHomeComponent, AdminDashboardComponent, AdminEventComponent]
})
export class AdminModule { }
