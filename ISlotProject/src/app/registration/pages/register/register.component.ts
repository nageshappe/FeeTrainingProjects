import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  * as $ from "jquery";
import { Router } from '@angular/router';

declare var require: any


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  
  onButtonClick(formData:NgForm)
  {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    //console.log(formData["text1"].value);
    var param = {firstName: formData["fName"].value,
                  lastName:formData["lName"].value,
                  address:formData["address"].value,
                  city:formData["city"].value,
                  state:formData["state"].value,
                  userName:formData["userId"].value,
                  password:randomstring,
                  role:formData["role"].value

  };

    $.ajax({
      url: 'https://islot-2edfc.firebaseio.com/islot_data.json',
      type: "POST",
      data: JSON.stringify(param),
      success: () => {
        

        alert("success");
        this.route.navigate(['/login'])
        
      },
      error: function(error) {
        alert("error: "+error);
      }
    });
  
}



}
