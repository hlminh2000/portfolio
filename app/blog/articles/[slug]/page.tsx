
import dayjs from "dayjs"
import Image from "next/image"
import { getArticleBySlug } from "../../getSortedPostsData"
import { Suspense } from "react"
import { notFound } from "next/navigation"

const ArticleMetaDisplay = async ({ slug }: { slug: string }) => {
  const articleMeta = await getArticleBySlug(slug)
  if (!articleMeta) return null
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">{articleMeta.title}</h1>
      <div className="text-blue-600 mb-4">{dayjs(articleMeta.date).format("DD/MM/YYYY")}</div>
      <div className="mb-4">{articleMeta.preview}</div>
      {/* @ts-ignore */}
      <Image src={articleMeta.image}
        alt={articleMeta.title}
        className="rounded-lg object-cover w-full h-80 bg-center drop-shadow-lg" />
    </>
  )
}

export default async function ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const Post = (await import(`../${slug}/post.mdx`).catch(err => null))?.default
  if (!Post) return notFound()

  const articleMeta = await getArticleBySlug(slug)
  if (!articleMeta) return notFound()

  return (
    <article className="max-w-3xl mx-auto px-6 prose prose-invert mt-24 relative">
      <ArticleMetaDisplay slug={slug} />
      <Post />
    </article>
  )
}
