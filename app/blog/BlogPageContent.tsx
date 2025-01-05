'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs';
import _ from 'lodash';
import { BlogPostPreview } from '../components/BlogPostPreview';

export type BlogPost = {
  id: string
  title: string
  preview: string
  date: dayjs.Dayjs | string
  slug: string
  image?: StaticImageData
}

export default function BlogPageContent({ blogPosts }: {blogPosts: BlogPost[]}) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 relative">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => <BlogPostPreview key={post.id} blogPost={{ ...post, date: dayjs(post.date).toISOString() }} />)}
        </div>
      </div>
    </div>
  )
}