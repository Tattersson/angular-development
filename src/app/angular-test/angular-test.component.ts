import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

interface Interface {
  amount: number;
  currency: number;
}

@Component({
  selector: 'app-angular-test',
  templateUrl: './angular-test.component.html',
  styleUrls: ['./angular-test.component.css']
})
export class AngularTestComponent implements OnInit {
  usd:number = 0.87;
  sek:number = 0.10;
  gbp:number = 1.16;

  currencyForm!: FormGroup;

  constructor( private fb: FormBuilder) {



  }

  ngOnInit(): void {



      this.currencyForm = this.fb.group({
          amount: ['', [
            Validators.required,
            Validators.pattern('[0-9]'),

          ]],
        firstName: ['', [
          Validators.required,
          Validators.pattern (''),
          Validators.minLength(2),

        ]],
        lastName: ['', [
          Validators.required,
          Validators.pattern (''),
          Validators.minLength(2)
        ]],
        email: ['', [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),
          Validators.email
        ]],
        currency: ['',[

        ]]

      });





  this.currencyForm.valueChanges.subscribe(console.log)

  }
  onSubmit(e: NgForm){
    console.log(e.value.firstName);
    console.log(e.value.lastName);
    console.log(e.value.amount);
    console.log(e.value.email);



  }

  get amount(){
    return this.currencyForm.get('amount');
  }
  get firstName(){
    return this.currencyForm.get('firstName');
  }
  get lastName(){
    return this.currencyForm.get('lastName');
  }
  get email(){
    return this.currencyForm.get('email');
  }


}

