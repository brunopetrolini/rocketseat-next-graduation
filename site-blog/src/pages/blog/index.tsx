import { allPosts } from 'contentlayer/generated';
import type { GetStaticProps } from 'next/types';

import { BlogPage, type BlogPageProps } from '@/templates/blog';

export default function Blog({ posts }: BlogPageProps) {
  return <BlogPage posts={posts} />;
}

export const getStaticProps = (async () => {
  const sortedPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  return {
    props: {
      posts: sortedPosts,
    },
  };
}) satisfies GetStaticProps<BlogPageProps>;
