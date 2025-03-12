import { Component, type OnInit } from '@angular/core';
import { Question } from '../../../assets/data/dataType';
import quiz_questions from "../../../assets/data/quizz_questions.json"
import { OptionComponent } from "../option/option.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [OptionComponent, NgClass],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {

  title = ''

  questions: Question[] = []
  questionSelected?: Question

  answers: string[] = []
  answersSelected?: string

  questionIndex = 0
  maxQuestionIndex = 0

  finished = false
  finalResult = ''

  ngOnInit(): void {
    if (!quiz_questions) {
      return console.log("Necessário passar os dados")
    }

    this.title = quiz_questions.title
    this.questions = quiz_questions.questions
    this.questionSelected = this.questions[this.questionIndex]

    this.maxQuestionIndex = this.questions.length - 1
  }

  onSelectAnswer(answer: string) {
    this.answers.push(answer)

    if (this.questionIndex < this.maxQuestionIndex) {
      this.changeQuestion()
    } else {
      this.resultQuiz()
    }

  }

  private changeQuestion() {
    this.questionIndex += 1
    this.questionSelected = this.questions[this.questionIndex]
  }

  private resultQuiz() {
    const answersResultQuantity: { [key: string]: number } = {};

    this.answers.forEach(answer => {
      answersResultQuantity[answer] = (answersResultQuantity[answer] || 0) + 1;
    });

    const result = Object.keys(answersResultQuantity).reduce((highestKey, currentKey) => {
      const currentIsGreater = answersResultQuantity[currentKey] > (answersResultQuantity[highestKey] || 0)
      return currentIsGreater ? currentKey : highestKey;
    }, '');

    this.finalResult = quiz_questions.results[result as keyof typeof quiz_questions.results];
    this.finished = true;
  }
}
