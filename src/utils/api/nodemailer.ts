import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

type IncomingDataType = {
  file?: Express.Multer.File
  body: {
    interestGroup: string[]
    email: string
    message: string
    name: string
    budgetGroup: string[]
    document?: { path: string }
  }
}

const generateEmailContent = (data: IncomingDataType) => {
  const { file, body } = data
  const stringOutput = Object.entries(body)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  const htmlOutput = Object.entries(body)
    .map(([key, value]) => `<h2>${key}</h2><p>${value}</p>`)
    .join('')

  const attachments = file
    ? [
        {
          filename: file.originalname,
          content: file.buffer,
          path: file.path,
        },
      ]
    : []

  return {
    html: htmlOutput,
    text: stringOutput,
    attachments,
  }
}

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: email,
    pass,
  },
} as SMTPTransport.Options)

export const generateEmail = async (data: IncomingDataType) => {
  return await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Outstafford mail',
    ...generateEmailContent(data),
  })
}
