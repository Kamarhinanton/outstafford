import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getMarkdownInner = (slug: string, directory: string) => {
  const fullPath = path.join(directory, `${slug}.md`)

  const readFile = fs.readFileSync(fullPath, 'utf-8')
  const { data: frontMatter, content } = matter(readFile)

  return [frontMatter, content]
}
