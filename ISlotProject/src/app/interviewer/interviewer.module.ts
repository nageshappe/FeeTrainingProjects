import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDashboardComponent } from './pages/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerEventComponent } from './pages/interviewer-event/interviewer-event.component';
import { InterviewerHomeComponent } from './pages/interviewer-home/interviewer-home.component';
import { RouterModule } from '@angular/router';
import { route } from './interviewer.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  declarations: [InterviewerDashboardComponent, InterviewerEventComponent, InterviewerHomeComponent]
})
export class InterviewerModule { }
