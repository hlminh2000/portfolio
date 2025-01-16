import type { MDXComponents } from 'mdx/types'
import { Mermaid } from 'mdx-mermaid/lib/Mermaid'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }: { children: React.ReactNode }) => {
      return (
        <div className="prose prose-invert max-w-none">{children}</div>
      )
    },
    mermaid: Mermaid
  }
}