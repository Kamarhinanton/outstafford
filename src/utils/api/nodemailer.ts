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
    formType: string
  }
}

const generateEmailContent = (data: IncomingDataType) => {
  const { file, body } = data
  const filteredBody = Object.fromEntries(
    Object.entries(body).filter(([key]) => key !== 'formType'),
  )
  const stringOutput = Object.entries(filteredBody)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')

  const htmlOutput = Object.entries(filteredBody)
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
  let subject
  switch (data.body.formType) {
    case 'type1':
      subject = 'Outstafford - Contact message'
      break
    case 'type2':
      subject = 'Outstafford - Position message'
      break
    default:
      subject = 'Default message subject'
      break
  }
  return await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject,
    ...generateEmailContent(data),
  })
}
