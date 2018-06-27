import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import  * as $ from "jquery";
declare var require: any
var email 	= require("emailjs");
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
      success: function () {
        

        alert("success");
        var server  = email.server.connect({
          user:    "nageshf25@gmail.com", 
          password:"ananya_25 ", 
          host:    "smtp.gmail.com", 
          ssl:     true
       });
        
       // send the message and get a callback with an error or details of the message that was sent
       server.send({
          text:    "You have signed up", 
          from:    "nageshf25@gmail.com", 
          to:      param.userName,  
          subject: "Welcome to my app",
          attachment: 
          [
             {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
             {path:"pathtofile.zip", type:"application/zip", name:"renamed.zip"}
          ]
       }, function(err, message) { 
           if(err)
           console.log(err);
           });
            
      },
      error: function(error) {
        alert("error: "+error);
      }
    });
  
}



}
