import type { ComponentProps } from 'react';

import { tv } from '@/utils/tv';

type ButtonProps = ComponentProps<'button'>;

const button = tv({
  base: 'cursor-pointer rounded-lg bg-content-brand px-5 py-3 text-[#050505] text-label-lg uppercase transition-colors duration-200 hover:bg-background-highlights',
});

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={button({ class: className })} type="button" {...props}>
      {children}
    </button>
  );
}
