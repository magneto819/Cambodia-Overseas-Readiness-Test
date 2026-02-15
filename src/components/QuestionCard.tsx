import { QuizQuestion } from '../types/quiz';

interface QuestionCardProps {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelectAnswer: (value: string) => void;
  currentQuestion: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  currentQuestion,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-10">
        {/* Progress */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium text-gray-500">
              问题 {currentQuestion} / {totalQuestions}
            </span>
            <span className="text-xs sm:text-sm font-medium text-emerald-600">
              {Math.round((currentQuestion / totalQuestions) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 ease-out"
              style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 leading-relaxed">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-2.5 sm:space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => onSelectAnswer(option.value)}
              className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 ${
                selectedAnswer === option.value
                  ? 'border-emerald-500 bg-emerald-50 shadow-md scale-[1.02]'
                  : 'border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    selectedAnswer === option.value
                      ? 'border-emerald-500 bg-emerald-500'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedAnswer === option.value && (
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="text-sm sm:text-base md:text-lg text-gray-800 font-medium">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
