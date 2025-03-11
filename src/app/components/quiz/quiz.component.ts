import { Component } from '@angular/core';
import { Answer, Question } from '../../../assets/data/dataType';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  title = ''

  questions: Question[] = []
  questionSelected?: Question

  answers: Answer[] = []
  answersSelected?: Answer

  questionIndex = 0
  maxQuestionIndex = 0

  finished = false

}
