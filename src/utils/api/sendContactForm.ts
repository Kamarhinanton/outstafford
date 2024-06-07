import { FormData as FormDataType } from '@/utils/globalTypes'

export const sendContactForm = async (data: FormDataType) => {
  const fd = new FormData()
  if (data.document) {
    fd.append('document', data.document)
    delete data.document
  }
  fd.append('recipe', JSON.stringify(data))
  return fetch('/api/contact', {
    method: 'POST',
    body: fd,
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
}
