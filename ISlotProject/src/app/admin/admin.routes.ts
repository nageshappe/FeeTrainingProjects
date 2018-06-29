import { Route } from "@angular/router";
import { AdminDashboardComponent } from "./pages/admin-dashboard/admin-dashboard.component";

export const route : Route[] =[
    {
        path: 'admindashboard',
        component:AdminDashboardComponent
    },
    {
        path:'',
        component:AdminDashboardComponent
    }

]
    
