import Link, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>['className'];
}

export function ActiveLink({
  children,
  className,
  href,
  ...props
}: ActiveLinkProps) {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === props.as ||
    router.asPath.startsWith(String(props.as));

  return (
    <Link
      href={href}
      className={cn(
        'font-medium text-sm transition-colors hover:text-blue-500',
        isCurrentPath
          ? 'pointer-events-none text-blue-500'
          : 'text-muted-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
