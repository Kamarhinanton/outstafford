import { generateEmail } from '@/utils/api/nodemailer'
import multer from 'multer'
import { Request, Response } from 'express'

const storage = multer.memoryStorage()

const upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 },
})
export const config = {
  api: {
    bodyParser: false,
  },
}
const handler = async (req: Request, res: Response) => {
  if (req.method === 'POST') {
    upload.single('document')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: 'Upload failed' })
      }
      let body
      try {
        body = JSON.parse(req.body.recipe)
      } catch (parseError) {
        return res.status(400).json({ error: 'Invalid JSON in request body' })
      }
      if (body.formType === 'type1') {
        const { budgetGroup, interestGroup, message, email, name } = body
        if (!budgetGroup || !interestGroup || !message || !email || !name) {
          return res.status(400).json({ error: 'Data is not valid' })
        }
      }
      if (body.formType === 'type2') {
        const { email, name } = body
        if (!email || !name) {
          return res.status(400).json({ error: 'Data is not valid' })
        }
      }
      const file = req.file
      try {
        if (file) {
          await generateEmail({ file, body })
        } else {
          await generateEmail({ body })
        }
        res.status(200).json({ success: true })
      } catch (error) {
        console.error('Error generating email:', error)
        res.status(500).json({ error: 'Failed to generate email' })
      }
    })
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

export default handler
