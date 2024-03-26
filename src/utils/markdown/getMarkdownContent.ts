import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getMarkdownContent = (directory: string) => {
  const files = fs.readdirSync(directory)

  return files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const fullPath = path.join(directory, fileName)

    const readFile = fs.readFileSync(fullPath, 'utf-8')
    const { data: frontMatter } = matter(readFile)

    return {
      slug,
      frontMatter,
    }
  })
}
