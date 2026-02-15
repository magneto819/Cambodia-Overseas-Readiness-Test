import { ArrowRight, Target, TrendingUp, Shield, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fadeIn">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white/10 rounded-full -mr-24 -mt-24 sm:-mr-32 sm:-mt-32 md:-mr-48 md:-mt-48"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full -ml-16 -mb-16 sm:-ml-24 sm:-mb-24 md:-ml-32 md:-mb-32"></div>

          <div className="relative z-10 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 sm:px-6 sm:py-2 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold">专业评估工具</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              出海体质测试
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-2">柬埔寨篇</p>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mt-4 sm:mt-6 px-4">
              10 道题目，深度评估你是否适合前往柬埔寨发展
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="p-6 sm:p-8 md:p-10">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">心理适配度</h3>
                <p className="text-gray-600 text-xs sm:text-sm">评估你的风险承受能力和心理准备</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">现实资源</h3>
                <p className="text-gray-600 text-xs sm:text-sm">分析你的资金、能力和时间窗口</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">风险认知</h3>
                <p className="text-gray-600 text-xs sm:text-sm">了解你对不确定性的真实态度</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">行动稳定性</h3>
                <p className="text-gray-600 text-xs sm:text-sm">判断你的执行力和持续能力</p>
              </div>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">测试完成后，你将获得：</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-gray-700">
                <span className="text-emerald-500 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">专业的适配度评估和详细分析</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-700">
                <span className="text-emerald-500 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">个性化的发展路径建议</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-700">
                <span className="text-emerald-500 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">真实的风险提醒和注意事项</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-700">
                <span className="text-emerald-500 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span className="text-sm sm:text-base">专属的后续资源和行动指南</span>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            开始测试
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
            预计用时：1 分钟 | 完全免费
          </p>
        </div>
      </div>
    </div>
  );
}
