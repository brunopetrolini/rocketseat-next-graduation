import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const tagVariants = cva(
  'w-fit rounded-sm px-3 py-1.5 text-body-tag',
  {
    variants: {
      variant: {
        cyan: 'bg-cyan-300 text-cyan-100',
        blue: 'bg-blue-400 px-2 py-1 text-blue-200',
      },
    },
    defaultVariants: {
      variant: 'cyan',
    },
  },
);

function Tag({
  className,
  variant = 'cyan',
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof tagVariants>) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Tag, tagVariants };
