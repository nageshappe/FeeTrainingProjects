import {FormControl, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {

  constructor() { }
  
   name = new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern(/^\d/)]);

  ngOnInit() {
  }

}
