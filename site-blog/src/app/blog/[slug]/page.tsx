import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { PostPage } from '@/templates/blog/post';

type PostProps = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: PostProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) notFound();

  return <PostPage post={post} />;
}
