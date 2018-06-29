import { Route } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { RegisterComponent } from "./pages/register/register.component";


export const route : Route[] =[
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
     {
         path:'',
         component :LandingPageComponent
     },
     
]
    
