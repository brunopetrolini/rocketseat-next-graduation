import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

import { AuthorInfo } from '@/components/author-info';
import { date } from '@/lib/date';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="relative flex h-80 flex-col overflow-hidden rounded-xl border border-gray-400 bg-gray-600 p-2 text-gray-300 transition-colors duration-300 hover:border-blue-300"
    >
      <Image
        src={post.image}
        alt="Imagem de capa do post"
        width={400}
        height={144}
        className="top-0 left-0 h-36 w-full rounded-lg object-cover"
      />

      <span className="absolute top-0 right-0 rounded-bl-lg bg-gray-600 pt-2.5 pr-3.5 pb-1.5 pl-2.5">
        {date.formatToBRL(post.date)}
      </span>

      <div className="flex flex-1 flex-col overflow-x-hidden p-2">
        <h2 className="text-wrap font-sans text-gray-100 text-heading-sm">
          {post.title}
        </h2>

        <p className="mt-2 flex-1 truncate text-wrap text-body-sm">
          {post.description}
        </p>

        <div className="mt-3 border-gray-400 border-t">
          <div className="mt-3">
            <AuthorInfo
              avatarUrl={post.avatar}
              avatarAlt="Foto do autor do post"
              name={post.author}
              size="sm"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
