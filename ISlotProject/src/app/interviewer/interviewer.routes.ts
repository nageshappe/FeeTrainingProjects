import { Route } from "@angular/router";
import { InterviewerDashboardComponent } from "./pages/interviewer-dashboard/interviewer-dashboard.component";


export const route : Route[] =[
    {
        path: 'interviewerdashboard',
        component:InterviewerDashboardComponent
    },
    {
        path:'',
        component:InterviewerDashboardComponent
    }

]
    
