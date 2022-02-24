import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, Validator} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
      this.myForm = this.fb.group({
        name: ['',[
          Validators.required,
          Validators.pattern(''),
          Validators.minLength(4),
        ]],
        email: '',
        username: ''
      })



    this.myForm.valueChanges.subscribe(console.log)
  }

}
