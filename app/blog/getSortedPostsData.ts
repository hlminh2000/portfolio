import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import _ from 'lodash';

const postsDirectory = path.join(process.cwd(), 'app/blog');

export type BlogPost = {
  id: string
  title: string
  preview: string
  date: dayjs.Dayjs
  slug: string
  image?: string
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (folderName) => {
    // Remove ".md" from file name to get id
    if (folderName.includes("."))  return null
    
    const id = `${folderName}/page.mdx`;

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, folderName, "page.mdx");
    const fileContents = await fs.readFile(fullPath, 'utf8').catch(() => {
      return null
    });

    // Use gray-matter to parse the post metadata section
    const matterResult = fileContents && matter(fileContents);
    // @ts-ignore
    const imagePath = path.join(folderName, matterResult?.data.image || "");
    const image = (await import(`./${imagePath}`).catch(() => {}))?.default;

    // Combine the data with the id
    return matterResult && {
      id,
      ...matterResult.data,
      image,
    };
  }));
  // Sort posts by date
  return allPostsData.filter(_.identity).sort((a, b) => {
    // @ts-ignore
    if (dayjs(a.date).isBefore(dayjs(b.date))) {
      return 1;
    } else {
      return -1;
    }
  }).map((post): BlogPost => {
    const parsed = post as {
      id: string,
      title: string,
      date: string,
      preview: string,
      image?: string
    }
    return {
      ...parsed,
      date: dayjs(parsed.date),
      slug: parsed.id.split("/page")[0],
    }
  });
}