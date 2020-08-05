import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <InputBlock>
      <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} />
      </div>
    </InputBlock>
  );
};

export default Input;
