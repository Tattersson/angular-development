import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from './person';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  @Input() person: Person;
  constructor() {
    this.person = new Person();
  }

  onSubmit(e: NgForm){
    console.log(e.value.firstName);
    console.log(e.value.lastName);
    console.log(e.value.personid);
    console.log(e.value.email);
    console.log(e.value.username);
    console.log(e.value.password);
    console.log(e.value.repassword);


  }
  onReset(e: NgForm) {
  e.resetForm();
}

  ngOnInit(): void {
  }

}
