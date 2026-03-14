import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-sm font-medium text-text-secondary">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            h-11 w-full rounded-lg bg-surface border px-4 py-2 text-base text-white outline-none transition-all
            placeholder:text-text-secondary/50 focus:border-brand focus:ring-1 focus:ring-brand
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10'}
            ${className}
          `}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
