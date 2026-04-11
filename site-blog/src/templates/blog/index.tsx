'use client';

import type { Post } from 'contentlayer/generated';
import { HeartCrackIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

import { SearchInput } from '@/components/ui/search-input';
import { PostCard } from './components/post-card';

export type BlogPageProps = {
  posts: Post[];
};

export function BlogPage({ posts }: BlogPageProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ?? '';

  const filteredPosts = query
    ? posts.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase());
      })
    : posts;
  const hasPosts = filteredPosts.length > 0;

  return (
    <div className="container mt-24 flex h-full grow flex-col">
      <header className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3 md:max-w-md">
          {/* Tag */}
          <span className="w-fit rounded-sm bg-cyan-300 px-3 py-1.5 text-body-tag text-cyan-100">
            Blog
          </span>

          {/* Title */}
          <h1 className="text-left font-sans text-gray-100 text-heading-lg md:text-heading-xl">
            Dicas e estratégias para impulsionar seu negócio
          </h1>
        </div>

        {/* Search */}
        <SearchInput />
      </header>

      {/* Posts */}
      {!hasPosts && (
        <div className="mt-24 flex flex-col items-center gap-4 text-center">
          <HeartCrackIcon className="size-8 text-gray-300" />
          <p className="text-body-md text-gray-300">
            {`Não encontramos nenhum post com o termo "${query}", que tal tentar outro?`}
          </p>
        </div>
      )}

      {hasPosts && (
        <div className="mt-6 mb-20 grid grid-cols-1 gap-4 md:mt-14 md:mb-32 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
