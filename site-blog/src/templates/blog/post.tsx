import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Markdown } from '@/components/markdown';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { useShare } from '@/hooks';
import { date } from '@/lib/date';

export function PostPage() {
  const router = useRouter();
  const post = allPosts.find(
    (post) => post.slug === (router.query.slug as string),
  );

  useEffect(() => {
    if (router.isReady && !post) {
      router.replace('/blog');
    }
  }, [router.isReady, post, router]);

  if (!post) return null;

  return <PostContent post={post} />;
}

function PostContent({ post }: { post: Post }) {
  const router = useRouter();

  const { shareButtons } = useShare({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
    title: post.title,
    text: post.description,
  });

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
          <figure className="relative aspect-16/10 max-h-33 w-full overflow-hidden md:max-h-66">
            <Image src={post.image} alt={post.title} fill objectFit="cover" />
          </figure>

          {/* Post Content */}
          <div className="flex flex-col gap-6 p-6 pt-8 md:gap-8 md:p-16 md:pt-12">
            {/* Post Header */}
            <header className="flex flex-col gap-6 md:gap-8">
              <h2 className="font-sans text-gray-100 text-heading-md md:text-heading-xl">
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

        <aside className="space-y-6">
          <div className="rounded-lg bg-gray-700 py-4 md:px-6 md:py-0">
            <h2 className="mb-4 text-gray-100 text-heading-xs">Compartilhar</h2>

            <div className="space-y-3">
              {shareButtons.map((shareOption) => (
                <Button
                  key={shareOption.provider}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={shareOption.action}
                >
                  {shareOption.icon}
                  {shareOption.name}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
