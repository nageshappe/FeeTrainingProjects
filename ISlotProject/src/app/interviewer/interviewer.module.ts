import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewerDashboardComponent } from './pages/interviewer-dashboard/interviewer-dashboard.component';
import { InterviewerEventComponent } from './pages/interviewer-event/interviewer-event.component';
import { InterviewerHomeComponent } from './pages/interviewer-home/interviewer-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterviewerDashboardComponent, InterviewerEventComponent, InterviewerHomeComponent]
})
export class InterviewerModule { }
