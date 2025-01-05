import dayjs from 'dayjs';
import _ from 'lodash';
import { getSortedPostsData } from './getSortedPostsData';
import BlogPageContent from './BlogPageContent';
import { BlogPostPreview } from '../components/BlogPostPreview';
import { Suspense } from 'react';
import { BlogPreviewPlaceholder } from '../components/BlogPreviewPlaceholder';
export { type BlogPost } from './BlogPageContent';

const BlogPostList = async () => {
  const blogPosts = await getSortedPostsData();
  return blogPosts.map((post) => <BlogPostPreview key={post.id} blogPost={{ ...post, date: dayjs(post.date).toISOString() }} />)
}

export default async function BlogPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6 relative">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          <Suspense fallback={
            <>
              <BlogPreviewPlaceholder />
              <BlogPreviewPlaceholder />
            </>
          }>
            <BlogPostList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

