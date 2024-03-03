// src/components/wrap/inputs/TextFieldWrapper.tsx
import React from 'react'
import InputFieldWrapper from './InputFieldWrapper'
import IconTextFields from '../../ext/displays/IconTextFieldsExt'

export interface InputFieldWrapperProps {
  placeholder: string
  errorMessage: string
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  required: boolean
}

const TextFieldWrapper: React.FC<InputFieldWrapperProps> = props => {
  const stringValue: string = props.value
  return <InputFieldWrapper {...props} icon={<IconTextFields />} value={stringValue} />
}

export default TextFieldWrapper
