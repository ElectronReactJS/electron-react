// src/components/wrap/inputs/NumberFieldWrapper.tsx
import React from 'react'
import InputFieldWrapper from './InputFieldWrapper'
import NumbersIcon from '../../extends/displays/IconNumbersWrapper'

export interface NumberFieldWrapperProps {
  placeholder: string
  errorMessage: string
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
}

const NumberFieldWrapper: React.FC<NumberFieldWrapperProps> = props => {
  return <InputFieldWrapper {...props} icon={<NumbersIcon />} />
}

export default NumberFieldWrapper
