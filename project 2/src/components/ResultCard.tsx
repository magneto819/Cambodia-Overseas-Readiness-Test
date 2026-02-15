import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ResultType } from '../types/quiz';
import { ContactModal } from './ContactModal';

interface ResultCardProps {
  result: ResultType;
  score: number;
  onRestart: () => void;
}

export function ResultCard({ result, score, onRestart }: ResultCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${result.color} p-6 sm:p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -mr-24 -mt-24 sm:-mr-32 sm:-mt-32"></div>
          <div className="relative z-10">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{result.emoji}</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{result.title}</h2>
            <p className="text-white/90 text-base sm:text-lg">{result.subtitle}</p>
            <div className="mt-4 sm:mt-6 inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-6 sm:py-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">你的得分：{score} / 40</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          {/* Description */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
            <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">{result.description}</p>
          </div>

          {/* Suggestions */}
          {result.suggestions && result.suggestions.length > 0 && (
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                适合路径
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-700">
                    <span className="text-emerald-500 mt-0.5 sm:mt-1 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base md:text-lg">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {result.warnings && result.warnings.length > 0 && (
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                提醒
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {result.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-700">
                    <span className="text-amber-500 mt-0.5 sm:mt-1 flex-shrink-0">⚠</span>
                    <span className="text-sm sm:text-base md:text-lg">{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Button */}
          <div className="pt-2 sm:pt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`w-full bg-gradient-to-r ${result.color} text-white py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
            >
              {result.cta}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Restart Button */}
          <div className="pt-1 sm:pt-2">
            <button
              onClick={onRestart}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 sm:px-8 rounded-xl font-medium text-sm sm:text-base hover:bg-gray-200 transition-colors"
            >
              重新测试
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
