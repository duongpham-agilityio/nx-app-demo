import { InputHTMLAttributes, ReactNode } from 'react';

// styles
import './index.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = (props: InputProps) => {
  const { leftIcon, rightIcon, ...rest } = props;

  return (
    <div className="input">
      {leftIcon}
      <input type="text" {...rest} />
      {rightIcon}
    </div>
  );
};
