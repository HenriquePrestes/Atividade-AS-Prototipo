import { InputHTMLAttributes } from 'react';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Checkbox({ label, id, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center text-white">
      <input
        type="checkbox"
        id={id}
        {...props}
        className="mr-2 h-4 w-4 rounded border-gray-300 text-cyan-500 focus:ring-cyan-500"
      />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
  );
}