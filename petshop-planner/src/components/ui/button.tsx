import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { tv } from '@/utils/tv';

const button = tv({
  base: 'cursor-pointer transition-all duration-200 ',
  variants: {
    variant: {
      primary:
        'px-5 py-3 text-[#050505] text-label-lg  rounded-lg bg-background-brand hover:bg-background-highlights',
      outline:
        'text-content-tertiary text-paragraph-sm hover:text-content-primary hover:underline',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>;

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, className })} type="button" {...props}>
      {children}
    </button>
  );
}
