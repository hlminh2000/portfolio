import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children }: { children: React.ReactNode }) => {
      return (
        <div className="prose prose-invert" style={{minWidth: "100%"}}>
          {children}
        </div>
      )
    },
  }
}