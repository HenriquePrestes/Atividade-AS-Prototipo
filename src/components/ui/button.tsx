import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
  const baseStyle = 'rounded-lg p-3 font-bold shadow-md transition-all';

  const primaryStyle = 'bg-cyan-400 text-white hover:bg-cyan-500';
  const secondaryStyle = 'bg-white text-gray-700 hover:bg-gray-100';

  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button {...props} className={`${baseStyle} ${style} ${className ?? ''}`}>
      {children}
    </button>
  );
}