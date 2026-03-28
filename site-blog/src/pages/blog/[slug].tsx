import { allPosts } from 'contentlayer/generated';
import type { GetStaticPaths, GetStaticProps } from 'next/types';

import { PostPage, type PostPageProps } from '@/templates/blog/post';

export const getStaticPaths = (() => {
  const sortedAndRecentPosts = allPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);
  const paths = sortedAndRecentPosts.flatMap((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}) satisfies GetStaticPaths;

export const getStaticProps = ((context) => {
  const slug = context.params?.slug;
  const post = allPosts.find((post) => post.slug === slug);

  if (!slug || !post) return { notFound: true };

  return {
    props: { post },
  };
}) satisfies GetStaticProps<PostPageProps>;

export default function Post({ post }: PostPageProps) {
  return <PostPage post={post} />;
}
