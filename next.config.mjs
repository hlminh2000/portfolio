import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import rehypePrettyCode from "rehype-pretty-code";
import mdxMermaid from 'mdx-mermaid'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      [mdxMermaid, { output: 'svg' }],
      remarkFrontmatter, 
      remarkMdxFrontmatter,
    ],
    rehypePlugins: [
      (args) => rehypePrettyCode({ ...args, keepBackground: false })
    ],

    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },

})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)