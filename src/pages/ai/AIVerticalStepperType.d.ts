// src/pages/ai/AIAIVerticalStepperType.d.ts
export interface AIVerticalStepperType {
  index: number
  role: 'system' | 'user'
  content?: string
  contentInput?: React.ReactNode
  icon: typeof RobotIcon | typeof UserIcon
}
