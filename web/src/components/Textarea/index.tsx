import React, { TextareaHTMLAttributes } from 'react';

import { TextareaBlock } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <TextareaBlock>
      <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} />
      </div>
    </TextareaBlock>
  );
};

export default Textarea;
