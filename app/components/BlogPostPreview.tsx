'use client'
import Image from 'next/image'
import dayjs from 'dayjs';
import _ from 'lodash';
import Link from 'next/link';
import { BlogPost } from '../blog/BlogPageContent';
import { Tag } from '@/components/ui/tag';

const BlogPostPrev = ({ blogPost }: { blogPost: Omit<BlogPost, "date"> & { date: string } }) => {
  return (
    <Link href={`/blog/articles/${blogPost.slug}`} className="block">
      <article className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 flex flex-col sm:flex-row gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
        {blogPost.image && (
          <div className="sm:w-1/3">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              width={300}
              // height={200}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        )}
        <div className={blogPost.image ? "sm:w-2/3" : "w-full"}>
          <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {blogPost.title}
          </h2>
          <p className="text-gray-400 mb-2">{blogPost.preview}</p>

          <div className="mb-2 flex flex-wrap gap-2">{(blogPost.tags || []).map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}</div>
          <div className="text-sm text-gray-500">{dayjs(blogPost.date).format("DD/MM/YYYY")}</div>
        </div>
      </article>
    </Link>
  )
}

export const BlogPostPreview = BlogPostPrev