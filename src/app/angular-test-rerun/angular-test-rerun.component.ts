
import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
  selector: 'app-angular-test-rerun',
  templateUrl: './angular-test-rerun.component.html',
  styleUrls: ['./angular-test-rerun.component.css']
})
export class AngularTestRerunComponent {

  loanAmount = 0;
  loanTime = 0;

  //Transfer these to GET functions

  get firstname() {
    return this.loanForm.get('firstname');
  }

  get lastname() {
    return this.loanForm.get('lastname');
  }
  get nationalid() {
    return this.loanForm.get('nationalid');
  }

  get email() {
    return this.loanForm.get('email');
  }

  get phone() {
    return this.loanForm.get('phone');
  }
  loanForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  initializeForm() {

    this.loanForm = new FormGroup({

      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z]")
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[A-Za-z]")
      ]),
      nationalid: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]*$")
      ])


    });

    //this.loanForm.valueChanges.subscribe(console.log);
    return this.loanForm;
  }




  onSubmit() {

    var loanTime = this.loanTime;
    var loanAmount = this.loanAmount;

    this.loanForm = this.loanForm.value;


    console.log(loanTime);
    console.log(loanAmount);

    console.log(this.loanForm);
  }

  calculateMonthlypay() {
    var result = 0;
    var roundedResult = 0;
    result = (Math.pow((1 + 9.5 / 1200), 12 * this.loanTime) * 9.5 / 1200) / ((Math.pow((1 + 9.5 / 1200), 12 * this.loanTime)) - 1) * this.loanAmount;

    roundedResult = parseFloat(result.toFixed(2));

    console.log(roundedResult);
    return roundedResult;

  }





}
