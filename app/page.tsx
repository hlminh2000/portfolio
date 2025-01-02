
import React from 'react';
import Home from './PageContent';
import { getTimeline } from './timeline';
import { getSortedPostsData } from './blog/getSortedPostsData';
import dayjs from 'dayjs';


export default async function Page() {
  const blogPosts = await getSortedPostsData()
  const latestBlogPost = blogPosts.reduce((prev, current) => dayjs(prev.date).isAfter(dayjs(current.date)) ? prev : current)

  return (
    <Home
      timeline={await getTimeline()}
      latestBlogPost={{
        ...latestBlogPost,
        date: dayjs(latestBlogPost.date).format('MMMM D, YYYY')
      }}
    />
  )
}