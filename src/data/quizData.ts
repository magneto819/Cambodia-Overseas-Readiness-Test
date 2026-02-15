import { QuizQuestion, ResultType } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '你面对不确定性的真实反应是？',
    options: [
      { label: 'A. 越不确定，越兴奋', value: 'A', score: 4 },
      { label: 'B. 能接受，但需要基本兜底', value: 'B', score: 3 },
      { label: 'C. 会焦虑，喜欢确定路径', value: 'C', score: 2 },
      { label: 'D. 非常排斥', value: 'D', score: 1 },
    ],
  },
  {
    id: 2,
    question: '你现在考虑柬埔寨，最真实的原因是？',
    options: [
      { label: 'A. 主动寻找新机会', value: 'A', score: 4 },
      { label: 'B. 国内增长受限，想换环境', value: 'B', score: 3 },
      { label: 'C. 听说这里有红利', value: 'C', score: 2 },
      { label: 'D. 有点被现实逼到墙角', value: 'D', score: 1 },
    ],
  },
  {
    id: 3,
    question: '你目前可支配的"试错资金"是？',
    options: [
      { label: 'A. ≥ 20 万人民币', value: 'A', score: 4 },
      { label: 'B. 5–20 万', value: 'B', score: 3 },
      { label: 'C. ＜5 万', value: 'C', score: 2 },
      { label: 'D. 几乎没有', value: 'D', score: 1 },
    ],
  },
  {
    id: 4,
    question: '你最能打的能力是？',
    options: [
      { label: 'A. 商务 / 资源 / 项目整合', value: 'A', score: 4 },
      { label: 'B. 技术 / 产品 / 运营', value: 'B', score: 3 },
      { label: 'C. 销售 / 市场 / BD', value: 'C', score: 2 },
      { label: 'D. 管理 / 带团队', value: 'D', score: 1 },
      { label: 'E. 学习能力强，但还没成体系', value: 'E', score: 3 },
    ],
  },
  {
    id: 5,
    question: '如果计划不顺，你最多能扛多久？',
    options: [
      { label: 'A. 1 年以上', value: 'A', score: 4 },
      { label: 'B. 6–12 个月', value: 'B', score: 3 },
      { label: 'C. 3–6 个月', value: 'C', score: 2 },
      { label: 'D. 不超过 3 个月', value: 'D', score: 1 },
    ],
  },
  {
    id: 6,
    question: '你对"灰色地带"的态度更接近？',
    options: [
      { label: 'A. 明确拒绝，只做合规', value: 'A', score: 4 },
      { label: 'B. 不主动碰，但心里有数', value: 'B', score: 3 },
      { label: 'C. 能赚钱就行', value: 'C', score: 2 },
      { label: 'D. 以前吃过亏，但没想清楚', value: 'D', score: 1 },
    ],
  },
  {
    id: 7,
    question: '你对海外生活的接受度？',
    options: [
      { label: 'A. 能吃苦，阶段性忍', value: 'A', score: 4 },
      { label: 'B. 不完美可以，但要成长', value: 'B', score: 3 },
      { label: 'C. 更看重生活便利和品质', value: 'C', score: 2 },
      { label: 'D. 很难适应差异', value: 'D', score: 1 },
    ],
  },
  {
    id: 8,
    question: '你更想以什么方式开始？',
    options: [
      { label: 'A. 创业 / 合伙', value: 'A', score: 4 },
      { label: 'B. 找工作 / 区域岗位', value: 'B', score: 3 },
      { label: 'C. 先考察 / 观察', value: 'C', score: 2 },
      { label: 'D. 其实还没想好', value: 'D', score: 1 },
    ],
  },
  {
    id: 9,
    question: '如果有人把真实情况直接告诉你（包括坑），你会？',
    options: [
      { label: 'A. 非常需要', value: 'A', score: 4 },
      { label: 'B. 有帮助', value: 'B', score: 3 },
      { label: 'C. 看看就好', value: 'C', score: 2 },
      { label: 'D. 不太想听负面', value: 'D', score: 1 },
    ],
  },
  {
    id: 10,
    question: '你完成这个测试的目的更像？',
    options: [
      { label: 'A. 准备认真规划', value: 'A', score: 4 },
      { label: 'B. 判断值不值得', value: 'B', score: 3 },
      { label: 'C. 随便测测', value: 'C', score: 2 },
      { label: 'D. 纯好奇', value: 'D', score: 1 },
    ],
  },
];

export const resultTypes: ResultType[] = [
  {
    scoreRange: [32, 40],
    emoji: '🟢',
    title: '高适配 · 现实型机会捕手',
    subtitle: '你不是来"赌运气"的，你是来"做事"的。',
    description: '你的特点：能接受不确定，但不盲目；有基本资源与时间窗口；对规则和风险有清醒认知。',
    suggestions: [
      '创业 / 合伙',
      '实体、服务、供应链、教育、合规项目',
    ],
    warnings: ['真正的红利，来自长期主义，而不是第一波冲动。'],
    cta: '获取《柬埔寨真实落地路径图（创业 / 工作）》',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    scoreRange: [26, 31],
    emoji: '🟡',
    title: '可尝试 · 职业型落地者',
    subtitle: '柬埔寨不是终点，但可能是你职业曲线的一段加速区。',
    description: '建议：先岗位 → 再判断是否创业；用 6–12 个月换认知与区域经验。',
    warnings: ['别急着"做老板"，先把环境跑熟。'],
    cta: '查看《柬埔寨真实岗位画像》',
    color: 'from-amber-500 to-orange-500',
  },
  {
    scoreRange: [20, 25],
    emoji: '🟠',
    title: '观望型 · 易被故事吸引',
    subtitle: '你需要的是信息密度，而不是行动冲动。',
    description: '风险点：被"成功案例"过滤；忽略失败成本。',
    suggestions: ['先补认知', '再决定是否行动'],
    cta: '听 3 个真实失败案例（免费）',
    color: 'from-orange-500 to-red-500',
  },
  {
    scoreRange: [14, 19],
    emoji: '🔴',
    title: '高风险 · 易踩坑体质',
    subtitle: '现在来，你更像是被环境推着走。',
    description: '主要风险：资金窗口太短；心理预期过高；容易被"机会话术"影响。',
    suggestions: ['暂缓行动', '先解决：技能 / 现金流 / 认知'],
    cta: '下载《来柬埔寨前必须知道的 10 个真相》',
    color: 'from-red-500 to-rose-600',
  },
  {
    scoreRange: [10, 13],
    emoji: '🔵',
    title: '不适配 · 成本高于收益',
    subtitle: '不是你不行，是这个阶段不合适。',
    description: '建议：留在原环境积累筹码；不必被"出海焦虑"裹挟。',
    cta: '理性选择，也是一种能力',
    color: 'from-slate-500 to-gray-600',
  },
];
