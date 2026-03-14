import type * as React from 'react';

import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  as?: 'h1' | 'h2';
  size?: 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
};

export function SectionHeading({
  as: Tag = 'h2',
  size = 'xl',
  className,
  children,
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        'font-sans text-gray-100',
        size === 'xl' ? 'text-heading-xl' : 'text-heading-lg',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
