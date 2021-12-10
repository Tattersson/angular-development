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

    console.log(e.value.lastName);
    console.log(e.controls['lastName'].status);

    console.log(e.value.personid);
    console.log(e.controls['personID'].status);

    console.log(e.value.email);
    console.log(e.controls['email'].status);

    console.log(e.value.username);
    console.log(e.controls['username'].status);

    console.log(e.value.password);
    console.log(e.controls['password'].status);
    console.log(e.value.repassword);
    console.log(e.controls['repassword'].status);

  }
  onReset(e: NgForm) {
  e.resetForm();
}

  ngOnInit(): void {
  }

}
