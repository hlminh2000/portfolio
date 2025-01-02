'use client';
import React from 'react';
import Post from './post.mdx';
import { FloadingBlob } from '../../components/FloatingBlob';

const TensorflowFizzbuzzPage = () => {
  return (
    <div>
      {/* <FloadingBlob /> */}
      <div className='relative prose'>
        <Post />
      </div>
    </div>
  );
};

export default TensorflowFizzbuzzPage;