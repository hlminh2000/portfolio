"use client"

import dayjs from "dayjs"
import { ReactNode, useEffect, useState } from "react"
import { getArticleBySlug } from "../getSortedPostsData"
import Image from "next/image"

export const ArticleDisplay = ({ children }: { children: ReactNode }) => {

  const [articleMeta, setArticleMeta] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      const slug = window.location.pathname.split("/articles/")[1]
      const article = await Promise.resolve(slug ? getArticleBySlug(slug) : null)
      setArticleMeta(article)
    }
    init()
  }, [])


  return (
    <article className="max-w-3xl mx-auto px-6 prose prose-invert mt-24 relative">
      {
        articleMeta && (
          <>
            <h1 className="text-4xl font-bold mb-8">{articleMeta.title}</h1>
            <div className="text-blue-600 mb-4">{dayjs(articleMeta.date).format("DD/MM/YYYY")}</div>
            <div className="mb-4">{articleMeta.preview}</div>
            <Image src={articleMeta.image} alt={articleMeta.title} className="rounded-lg object-cover w-full h-80" />
          </>
        )
      }
      {
        !articleMeta && (
          <>
            <div className="w-2/3 bg-gray-700/50 h-6 mb-8 rounded-lg"></div>
            <div className="w-1/6 bg-gray-700/50 h-6 mb-4 rounded-lg"></div>
            <div className="w-full bg-gray-700/50 h-6 mb-1 rounded-lg"></div>
            <div className="w-1/2 bg-gray-700/50 h-6 mb-4 rounded-lg"></div>
            <div className="w-full h-80 bg-gray-700/50 h-6 mb-4 rounded-lg"></div>
          </>
        )
      }
      {/* @ts-ignore */}
      {children}
    </article>
  )
}