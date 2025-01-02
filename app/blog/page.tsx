import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import dayjs from 'dayjs';
import _ from 'lodash';

const postsDirectory = path.join(process.cwd(), 'app/blog');

type BlogPost = {
  id: number
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
    const id = `${folderName}/page.mdx`;

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, folderName, "page.mdx");
    const fileContents = await fs.readFile(fullPath, 'utf8').catch(() => {
      return null
    });

    // Use gray-matter to parse the post metadata section
    const matterResult = fileContents && matter(fileContents);

    // Combine the data with the id
    return matterResult && {
      id,
      ...matterResult.data,
    };
  }));
  // Sort posts by date
  return allPostsData.filter(_.identity).sort((a, b) => {
    if (dayjs(a.date).isBefore(dayjs(b.date))) {
      return 1;
    } else {
      return -1;
    }
  }).map((post ): BlogPost => {
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
      slug: parsed.id,
    }
  });
}


export default async function BlogPage() {

  const blogPosts = await getSortedPostsData();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-8">
          {blogPosts.map((post) => (
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
                <div className="text-sm text-gray-500">{post.date.format("YYYYescape")}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

