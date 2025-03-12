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
    let hero = 0
    let villain = 0

    this.answers.forEach(answer => {
      if (answer === "B") {
        hero += 1
      } else {
        villain += 1
      }
    })

    const result = hero > villain ? "B" : "A"

    this.finalResult = quiz_questions.results[result]
    this.finished = true
  }

}
