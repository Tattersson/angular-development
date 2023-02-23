
import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";




@Component({
  selector: 'app-angular-test-rerun',
  templateUrl: './angular-test-rerun.component.html',
  styleUrls: ['./angular-test-rerun.component.css']
})
export class AngularTestRerunComponent {


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
  get loanTime() {
    return this.loanForm.get('loanTime');
  }

  get loanAmount() {
    return this.loanForm.get('loanAmount');
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
        Validators.required,
        Validators.pattern("/^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])[0-9]{2}[a+-][0-9]{3}[A-z0-9]$/") //pattern not working!

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
      ]),
      loanTime: new FormControl(''),
      loanAmount: new FormControl('')


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

    const time = this.loanTime?.value;
    const amount = this.loanAmount?.value;

    var result = 0;
    var roundedResult = 0;
    result = (Math.pow((1 + 9.5 / 1200), 12 * time) * 9.5 / 1200) / ((Math.pow((1 + 9.5 / 1200), 12 * time)) - 1) * amount;

    roundedResult = parseFloat(result.toFixed(2));

    console.log(roundedResult);
    return roundedResult;

  }



}


