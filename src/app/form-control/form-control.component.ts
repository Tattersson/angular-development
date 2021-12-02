import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from './person';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  
  person: Person;
  constructor() {
    this.person = new Person();
  }

  onSubmit(e: NgForm){
    console.log(e.value.firstName);
    console.log(e.controls['firstName'].status);
  }
  onReset(){

  }

  ngOnInit(): void {
  }

}
