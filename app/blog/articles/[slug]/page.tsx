
import dayjs from "dayjs"
import Image from "next/image"
import { getArticleBySlug, getSortedPostsData } from "../../getSortedPostsData"
import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"


export async function generateStaticParams() {
  return (await getSortedPostsData()).map(post => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params, searchParams }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { slug } = await params

  const articleMeta = await getArticleBySlug(slug)
  if (!articleMeta) return notFound()

  return {
    title: `Minh Ha | ${articleMeta.title}`,
    description: articleMeta.preview,
    openGraph: {
      images: [...articleMeta.image ? [articleMeta.image.src] : []],
    },
  }
}

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
        className="rounded-lg object-cover w-full h-96 bg-center drop-shadow-lg" />
    </>
  )
}

const Post = async ({ slug }: { slug: string }) => {
  const PostComponent = (await import(`../${slug}/post.mdx`).catch(err => null))?.default
  if (!PostComponent) return notFound()
  return <PostComponent />
}

export default async function ({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  return (
    <article className="max-w-3xl mx-auto px-6 prose prose-invert mt-24 relative">
      <div className="rounded-lg bg-gray-900/70 md:p-8 sm:p-4 p-2">
        <Suspense fallback={
          <>
            <div className="bg-gray-800/50 text-4xl font-bold mb-8 h-14" />
            <div className="bg-gray-800/50 text-blue-600 mb-4 h-7" />
            <div className="bg-gray-800/50 mb-4 h-7" />
            <div className="bg-gray-800/50 rounded-lg object-cover w-full h-96 bg-center drop-shadow-lg" />
          </>
        }>
          <ArticleMetaDisplay slug={slug} />
          <Post slug={slug} />
        </Suspense>
      </div>
    </article>
  )
}
