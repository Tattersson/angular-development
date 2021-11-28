import { Component, OnInit } from '@angular/core';
import {Questions} from './questions';
import {QuestionsService} from '../questions.service'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  question: Questions[];
    
  constructor(private service: QuestionsService) {
    this.question = service.getInformation();
   }

   onInput(event: any, question: { answer: string; }){
     if (event.value == 1){
       question.answer = 'Disagree!';
     }
     else if (event.value == 2){
      question.answer = 'Slightly disagree!';
     }
     else if (event.value == 3){
      question.answer = 'Neither agree or disagree!';
     }
     else if (event.value == 4){
      question.answer = 'Slightly agree!';
     }
     else{
      question.answer = 'I Agree!';
     }
   }


   clickEventSubmit(){
     
   }







  ngOnInit(): void {
  }

}
