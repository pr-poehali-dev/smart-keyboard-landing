import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95',
          {
            'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60':
              variant === 'primary',
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60':
              variant === 'secondary',
            'border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10':
              variant === 'outline',
            'px-6 py-3 text-sm': size === 'sm',
            'px-8 py-4 text-base': size === 'md',
            'px-10 py-5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
