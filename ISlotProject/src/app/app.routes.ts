import { Route } from "@angular/router";

export const route : Route[] =[
    {
        path: '',
        loadChildren: './registration/registration.module#RegistrationModule'
    }

]
    
