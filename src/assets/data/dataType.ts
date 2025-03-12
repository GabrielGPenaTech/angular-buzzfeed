export interface QuizData {
  title:     string;
  questions: Question[];
  results:   Results;
}

export interface Question {
  id:       number;
  question: string;
  options:  Option[];
}

export interface Option {
  id:    number;
  name:  string;
  alias: string;
}

// export  type Answer = "A" | "B"

export interface Results {
  A: string;
  B: string;
}
