import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s6component',
  templateUrl: './s6component.component.html',
  styleUrls: ['./s6component.component.css']
})
export class S6componentComponent implements OnInit {

  name:string;    // 1. In a component create two variables title and name.
  title:string;
  constructor() { }

  ngOnInit() {
    this.name=  'Value for variable Name';  // Session 6 : 2. Assign values to the variable in ngOnInit() 
   this.title= 'Value for variable title';
  }
  }


