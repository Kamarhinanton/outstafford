import fs from 'fs'

export const staticPath = (path: string) => {
  const files = fs.readdirSync(path)

  return files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
}
