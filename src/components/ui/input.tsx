import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  const base =
    'rounded-lg border border-gray-300 py-2 px-3 text-gray-700 bg-white placeholder-gray-400 focus:outline-none';

  return (
    <input
      {...props}
      className={`${base} ${className ?? ''}`}
    />
  );
}