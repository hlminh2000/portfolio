import React from 'react';
import Home from './PageContent';
import { getTimeline } from './timeline';
import { getSortedPostsData } from './blog/page';


export default async function Page() {
  const blogPosts = await getSortedPostsData()
  return <Home timeline={await getTimeline()} blogPosts={blogPosts.map(post => ({
    ...post,
    image: "",
  }))} />
}