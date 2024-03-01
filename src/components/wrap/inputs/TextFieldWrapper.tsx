// src/components/wrap/inputs/TextFieldWrapper.tsx
import React from 'react'
import InputFieldWrapper from './InputFieldWrapper'
import IconTextFields from '../../extends/displays/IconTextFieldsWrapper'

export interface InputFieldWrapperProps {
  placeholder: string;
  errorMessage: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}

const TextFieldWrapper: React.FC<InputFieldWrapperProps> = (props) => {
    const stringValue: string = props.value;
  return <InputFieldWrapper {...props} icon={<IconTextFields />} value={stringValue}/>
}

export default TextFieldWrapper
