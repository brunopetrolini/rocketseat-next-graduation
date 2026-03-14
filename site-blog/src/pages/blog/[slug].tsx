import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthorInfo } from '@/components/author-info';
import { Markdown } from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { date } from '@/lib/date';

export default function PostPage() {
  const router = useRouter();

  const post = allPosts.find(
    (post) => post.slug === (router.query.slug as string),
  );

  if (!post) return router.replace('/blog');

  return (
    <main className="container mt-24 flex flex-col gap-5 md:gap-8">
      {/* Navigation */}
      <Breadcrumb className="text-action-sm text-gray-100">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-300" />

          <BreadcrumbItem>
            <span className="text-blue-200">{post.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
        {/* Post */}
        <article className="flex flex-col overflow-hidden rounded-xl border border-gray-400 bg-gray-600">
          <figure className="relative aspect-16/10 max-h-[132px] w-full overflow-hidden md:max-h-[264px]">
            <Image src={post.image} alt={post.title} fill objectFit="cover" />
          </figure>

          {/* Post Content */}
          <div className="flex flex-col gap-6 p-6 pt-8 md:gap-8 md:p-16 md:pt-12">
            {/* Post Header */}
            <header className="flex flex-col gap-6 md:gap-8">
              <h2 className="font-sans text-gray-100 text-heading-md md:text-heading-xl">
                {post.title}
              </h2>

              <AuthorInfo
                avatarUrl={post.avatar}
                avatarAlt={post.author}
                name={post.author}
                subtitle={`Publicado em ${date.formatToBRL(post.date)}`}
              />
            </header>

            <div className="prose prose-invert max-w-none">
              <Markdown content={post.body.raw} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
