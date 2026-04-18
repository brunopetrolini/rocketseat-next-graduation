import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import { Markdown } from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { date } from '@/lib/date';
import { PostShare } from './components/post-share';
export type PostPageProps = {
  post: Post;
};

export function PostPage({ post }: PostPageProps) {
  if (!post) return null;
  return <PostContent post={post} />;
}

function PostContent({ post }: { post: Post }) {
  return (
    <main className="container mt-24 flex flex-col gap-5 lg:gap-8">
      {/* Navigation */}
      <div className="flex flex-row items-center justify-between">
        <Breadcrumb className="text-action-sm text-gray-100">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-300" />

            <BreadcrumbItem>
              <span className="text-blue-200 md:hidden">Post</span>
              <span className="hidden text-blue-200 md:block">
                {post.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Post Share - Only in small and medium screens */}
        <div className="lg:hidden">
          <PostShare post={post} />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
        {/* Post */}
        <article className="flex flex-col overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
          <figure className="relative aspect-16/10 max-h-33 w-full overflow-hidden lg:max-h-66">
            <Image src={post.image} alt={post.title} fill objectFit="cover" />
          </figure>

          {/* Post Content */}
          <div className="flex flex-col gap-6 p-6 pt-8 lg:gap-8 lg:p-16 lg:pt-12">
            {/* Post Header */}
            <header className="flex flex-col gap-6 lg:gap-8">
              <h2 className="font-sans text-gray-100 text-heading-md lg:text-heading-xl">
                {post.title}
              </h2>

              <div className="flex flex-row items-center gap-3">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={36}
                  height={36}
                  className="size-9 rounded-full border border-blue-200 object-cover"
                />

                <div className="flex flex-col gap-0.5">
                  <span className="text-body-sm text-gray-200">
                    {post.author}
                  </span>
                  <span className="text-body-xs text-gray-300">{`Publicado em ${date.formatToBRL(post.date)}`}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <Markdown content={post.body.raw} />
            </div>
          </div>
        </article>

        {/* Post Share - Only in large screens */}
        <div className="hidden lg:block">
          <PostShare post={post} />
        </div>
      </div>
    </main>
  );
}
