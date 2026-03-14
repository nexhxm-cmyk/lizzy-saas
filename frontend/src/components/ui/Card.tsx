import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  glass = true, 
  hover = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "rounded-2xl p-6 overflow-hidden";
  const glassStyles = glass ? "glass" : "bg-surface border border-white/5";
  const hoverStyles = hover ? "transition-transform duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_0_20px_rgba(106,0,255,0.1)]" : "";
  
  return (
    <div 
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
