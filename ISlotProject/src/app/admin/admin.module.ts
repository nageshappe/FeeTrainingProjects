import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { route } from './admin.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [AdminHomeComponent, AdminDashboardComponent, AdminEventComponent]
})
export class AdminModule { }
