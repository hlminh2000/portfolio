import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs';
import _ from 'lodash';
import { getSortedPostsData } from './getSortedPostsData';
import BlogPageContent from './BlogPageContent';

export { type BlogPost } from './BlogPageContent';
export default async function BlogPage() {

  const blogPosts = await getSortedPostsData();

  return (
    <BlogPageContent blogPosts={blogPosts.map(post => ({ ...post, date: dayjs(post.date).toISOString()}))} />
  )
}

