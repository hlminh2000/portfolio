import React from 'react';
import Home from './PageContent';
import { getTimeline } from './timeline';


export default async function Page() {
  return <Home timeline={await getTimeline()} />
}