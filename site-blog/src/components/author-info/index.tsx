import Image from 'next/image';

import { cn } from '@/lib/utils';

type AuthorInfoProps = {
  avatarUrl: string;
  avatarAlt: string;
  name: string;
  subtitle?: string;
  size?: 'sm' | 'md';
  className?: string;
};

const sizeConfig = {
  sm: { avatarSize: 20, avatarClass: 'h-5 w-5', gap: 'gap-2' },
  md: { avatarSize: 36, avatarClass: 'size-9', gap: 'gap-3' },
};

export function AuthorInfo({
  avatarUrl,
  avatarAlt,
  name,
  subtitle,
  size = 'md',
  className,
}: AuthorInfoProps) {
  const config = sizeConfig[size];

  return (
    <div className={cn('flex flex-row items-center', config.gap, className)}>
      <Image
        src={avatarUrl}
        alt={avatarAlt}
        width={config.avatarSize}
        height={config.avatarSize}
        className={cn(
          config.avatarClass,
          'rounded-full border border-blue-200 object-cover',
        )}
      />

      {subtitle ? (
        <div className="flex flex-col gap-0.5">
          <span className="text-body-sm text-gray-200">{name}</span>
          <span className="text-body-xs text-gray-300">{subtitle}</span>
        </div>
      ) : (
        <span className="text-body-sm text-gray-300">{name}</span>
      )}
    </div>
  );
}
