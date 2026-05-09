import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps = ComponentProps<'button'>;

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'cursor-pointer rounded-lg bg-content-brand px-5 py-3 text-[#050505] text-label-lg uppercase transition-colors duration-200 hover:bg-background-highlights',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
