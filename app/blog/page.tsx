import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import _ from 'lodash';
import { getSortedPostsData } from './getSortedPostsData';

const postsDirectory = path.join(process.cwd(), 'app/blog');

export type BlogPost = {
  id: string
  title: string
  preview: string
  date: dayjs.Dayjs
  slug: string
  image?: StaticImageData
}



export default async function BlogPage() {

  const blogPosts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => {
            return (
              <article key={post.id} className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                {post.image && (
                  <div className="md:w-1/3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="rounded-lg object-cover w-full h-48"
                    />
                  </div>
                )}
                <div className={post.image ? "md:w-2/3" : "w-full"}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-400 mb-4">{post.preview}</p>
                  <div className="text-sm text-gray-500">{post.date.format("DD/MM/YYYY")}</div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

