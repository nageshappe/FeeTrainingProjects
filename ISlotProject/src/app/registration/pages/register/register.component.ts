import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  * as $ from "jquery";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  onButtonClick(formData:NgForm)
  {
    console.log(formData["text1"].value);
    const data1 = {
      firstName: "Seetharam"
      };
  $.ajax({
      type: "POST",
      url: "https://islot-2edfc.firebaseio.com/islot_data.json",
      data: JSON.stringify(data1),
     success:function(data){
       console.log("data posted"+data);
     }

    });
}



}
