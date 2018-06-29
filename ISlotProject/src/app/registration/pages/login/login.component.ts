
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import  * as $ from "jquery";
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private httpService:Http,private route : Router ) { }
   
  ngOnInit() {
  }

  onButtonClick(logindata:NgForm)
  {
    
   console.log(logindata["username"].value);
     this.httpService.get('https://islot-2edfc.firebaseio.com/islot_data.json')
    .subscribe((data) => 
    //console.log(data.json()));
    {
      const data1=data.json();
      _.forEach(data1, (value1, key) => {
        if(logindata["username"].value == value1.userName && logindata["password"].value == value1.password)
        {
           //console.log(value1.userName);
            const role = value1.role;
            if(role ==  "Admin")
            {
             this.route.navigate(['/admin/admindashboard']);   
             console.log("ADmin login successful");
            }
            else if (role == "Interviewer")
            {
              this.route.navigate(['/interviewer/interviewerdashboard']);   
              console.log("Interviewer login successful");
            }
             
        }
          
      });
      console.log(data1);
        
      });
    }
  
    /* $.ajax({
      
       url: 'https://islot-2edfc.firebaseio.com/islot_data.json',
       type: 'GET',
       // dataType: 'json',
       success: function (data, textStatus, xhr) {
        
        
          console.log(data.val());
     
          
        },

       error: function (xhr, textStatus, errorThrown) {
           console.log('Error in Operation');
       }
   }); */
   
  
  

}
