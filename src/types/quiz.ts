export interface QuizOption {
  label: string;
  value: string;
  score: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface ResultType {
  scoreRange: [number, number];
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  suggestions?: string[];
  warnings?: string[];
  cta: string;
  color: string;
}
