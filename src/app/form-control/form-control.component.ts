import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';

  onSubmit(){

    console.log(this.firstName);
    console.log(this.lastName);

  }

  constructor() {


  }

  ngOnInit(): void {
  }

}
