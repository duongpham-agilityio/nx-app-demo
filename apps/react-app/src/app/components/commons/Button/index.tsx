import { ButtonHTMLAttributes, ReactNode } from 'react';

// styles
import './index.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  text?: string;
}

export const Button = (props: ButtonProps) => {
  const { leftIcon, rightIcon, children, text, ...rest } = props;

  return (
    <button className="btn" {...rest}>
      {leftIcon}
      {children ?? text}
      {rightIcon}
    </button>
  );
};
