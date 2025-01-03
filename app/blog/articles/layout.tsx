import { ArticleDisplay } from './ArticleDisplay';

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ArticleDisplay>
      {children}
    </ArticleDisplay>
  )
}


