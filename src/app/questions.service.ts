import { Injectable } from '@angular/core';
import { Questions } from './feedback/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questions: Questions[];

  constructor() {

      this.questions = [
        new Questions('I am satisfied how this app runs.'),
        new Questions('I am satisfied with the appearance.'),
        new Questions('I am happy with the service.')];
   }

   getInformation(): Questions[]{
     return this.questions;
   }
}
