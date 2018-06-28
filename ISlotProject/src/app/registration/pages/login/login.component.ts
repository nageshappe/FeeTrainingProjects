import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import  * as $ from "jquery";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService:Http) { }

  ngOnInit() {
  }

  onButtonClick(loginData:NgForm)
  {
    

     this.httpService.get('https://islot-2edfc.firebaseio.com/islot_data.json')
    .subscribe((data) => 
    //console.log(data.json()));
    {
      const data1=data.json();
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
