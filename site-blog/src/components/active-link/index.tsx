'use client';

import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>['className'];
};

export function ActiveLink({
  children,
  className,
  href,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href || pathname === props.as;

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-100',
        isCurrentPath ? 'pointer-events-none text-blue-200' : 'text-gray-100',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
