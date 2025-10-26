import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export default function Input({ label, hint, className = '', ...rest }: Props) {
  return (
    <label className="w-full block">
      {label && <div className="text-sm mb-1 opacity-90">{label}</div>}
      <input
        {...rest}
        className={`w-full rounded-xl px-4 py-3 bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-electric-teal)] ${className}`}
      />
      {hint && <div className="mt-1 text-xs opacity-70">{hint}</div>}
    </label>
  );
}
