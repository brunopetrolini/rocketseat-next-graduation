import { allPosts } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostPage } from '@/templates/blog/post';

type PostProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) return {};

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://blog.apollum.tech'),
    title: `${post.title} – Site.Set Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    robots: 'index, follow',
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: 'Site.Set Blog',
      locale: 'pt_BR',
      type: 'article',
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  return <PostPage post={post} />;
}
