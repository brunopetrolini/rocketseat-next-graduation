'use client';

import type { Post } from 'contentlayer/generated';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useShare } from '@/hooks';

type PostShareProps = {
  post: Post;
};

export function PostShare({ post }: PostShareProps) {
  const pathname = usePathname();

  const { shareButtons } = useShare({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`,
    title: post.title,
    text: post.description,
  });

  return (
    <aside className="flex gap-2 lg:block lg:space-y-6 lg:px-6 lg:py-0">
      <h2 className="mb-4 hidden text-gray-100 text-heading-xs lg:block">
        Compartilhar
      </h2>

      <div className="contents lg:block lg:space-y-2">
        {shareButtons.map((shareOption) => (
          <Button
            key={shareOption.provider}
            variant="outline"
            className="lg:w-full lg:justify-start"
            onClick={shareOption.action}
          >
            {shareOption.icon}
            <span className="hidden lg:inline">{shareOption.name}</span>
          </Button>
        ))}
      </div>
    </aside>
  );
}
