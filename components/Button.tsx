import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  showArrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false, 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-xl shadow-brand-500/30 hover:shadow-2xl hover:shadow-brand-600/40 hover:-translate-y-1 ring-1 ring-brand-400/20",
    secondary: "bg-gradient-to-r from-navy-900 to-navy-950 hover:from-navy-800 hover:to-navy-900 text-white shadow-xl shadow-navy-900/30 hover:shadow-2xl hover:shadow-navy-900/40 hover:-translate-y-1",
    accent: "bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-navy-900 shadow-xl shadow-accent-400/30 hover:shadow-2xl hover:shadow-accent-500/40 hover:-translate-y-1",
    outline: "border-2 border-slate-300 hover:border-brand-500 text-slate-700 hover:text-brand-600 bg-white/50 hover:bg-gradient-to-br hover:from-brand-50 hover:to-white shadow-sm hover:shadow-md",
    ghost: "text-brand-600 hover:text-brand-700 hover:bg-gradient-to-br hover:from-brand-50 hover:to-brand-100/50"
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};