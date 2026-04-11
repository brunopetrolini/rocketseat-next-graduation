import { allPosts } from 'contentlayer/generated';

import { BlogPage } from '@/templates/blog';

export default function BlogList() {
  const sortedPosts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  return <BlogPage posts={sortedPosts} />;
}
