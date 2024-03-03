// src/components/wrap/inputs/NumberFieldWrapper.tsx
import React from 'react'
import InputFieldWrapper from './InputField'
import NumbersIcon from '../../ext/displays/IconNumbersExt'

export interface NumberFieldWrapperProps {
  placeholder: string
  errorMessage: string
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  required: boolean
}

const NumberFieldWrapper: React.FC<NumberFieldWrapperProps> = props => {
  return <InputFieldWrapper {...props} icon={<NumbersIcon />} />
}

export default NumberFieldWrapper
