import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultCard } from './components/ResultCard';
import { quizQuestions, resultTypes } from './data/quizData';
import { ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';

type QuizState = 'welcome' | 'quiz' | 'result';

function App() {
  const [quizState, setQuizState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleSelectAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizState('result');
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setQuizState('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.entries(answers).forEach(([questionId, answerValue]) => {
      const question = quizQuestions.find((q) => q.id === parseInt(questionId));
      const option = question?.options.find((opt) => opt.value === answerValue);
      if (option) {
        totalScore += option.score;
      }
    });
    return totalScore;
  };

  const getResult = () => {
    const score = calculateScore();
    const result = resultTypes.find(
      (type) => score >= type.scoreRange[0] && score <= type.scoreRange[1]
    );
    return { result: result || resultTypes[resultTypes.length - 1], score };
  };

  const hasAnsweredCurrent = answers[currentQuestion?.id] !== undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-3 sm:px-4 py-4 sm:py-6 md:py-8">
          {quizState === 'welcome' && <WelcomeScreen onStart={handleStart} />}

          {quizState === 'quiz' && currentQuestion && (
            <div className="w-full">
              <QuestionCard
                question={currentQuestion}
                selectedAnswer={answers[currentQuestion.id] || null}
                onSelectAnswer={handleSelectAnswer}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={quizQuestions.length}
              />

              {/* Navigation Buttons */}
              <div className="max-w-3xl mx-auto mt-4 sm:mt-6 flex gap-3 sm:gap-4 px-4">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-gray-700 font-medium text-sm sm:text-base hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">上一题</span>
                  <span className="xs:hidden">上一题</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!hasAnsweredCurrent}
                  className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-sm sm:text-base hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLastQuestion ? '查看结果' : '下一题'}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {quizState === 'result' && (
            <ResultCard {...getResult()} onRestart={handleRestart} />
          )}
        </main>

        {/* Footer */}
        <footer className="py-4 sm:py-6 px-4 text-center text-gray-500 text-xs sm:text-sm space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-medium text-gray-700">客服微信：</span>
            <span className="font-bold text-gray-900 tracking-wider">18201809317</span>
          </div>
          <p>© 2026 出海体质测试 · 为你的决策提供专业参考</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
