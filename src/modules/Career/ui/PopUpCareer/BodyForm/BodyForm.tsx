import React, { useState } from 'react'
import { Controller, Resolver, useForm } from 'react-hook-form'
import TextField from '@/ui/TextField/TextField'
import FileField from '@/ui/FileField/FileField'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { sendContactForm } from '@/utils/api/sendContactForm'
import { FormData } from '@/utils/globalTypes'
import classNames from 'classnames'

import styles from './BodyForm.module.scss'

const FormPopup = dynamic(() => import('@/ui/FormPopup/FormPopup'), {
  ssr: false,
})

const defaultValues = {
  email: '',
  name: '',
  document: undefined,
  formType: 'type2',
}
const BodyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })

  const [sending, setSending] = useState(false)
  const [isVisible, setIsVisible] = useState({
    visible: false,
    error: false,
  })
  const [uploadedFiles, setUploadedFiles] = useState<File | undefined>(
    undefined,
  )

  const onSubmit = async (data: FormData) => {
    setSending(true)
    try {
      await sendContactForm(data)
      reset(defaultValues)
      setUploadedFiles(undefined)
      setIsVisible((prev) => {
        return {
          ...prev,
          visible: true,
          error: false,
        }
      })
    } catch (error) {
      reset(defaultValues)
      setUploadedFiles(undefined)
      setIsVisible((prev) => {
        return {
          ...prev,
          visible: true,
          error: true,
        }
      })
    }
    setSending(false)
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(styles['form'], [sending && styles['_loading']])}
      >
        <Controller
          control={control}
          name="formType"
          render={({ field }) => <input type="hidden" {...field} />}
        />
        <Controller
          control={control}
          name={'name'}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className={styles['form__field']}
                placeholder="James Williams"
                label={'Name'}
                error={errors['name']?.message}
              />
            )
          }}
        />
        <Controller
          control={control}
          name={'email'}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                className={styles['form__field']}
                placeholder="james@williams.com"
                label={'Email'}
                error={errors['email']?.message}
              />
            )
          }}
        />
        <Controller
          control={control}
          name={'document'}
          render={({ field }) => {
            return (
              <FileField
                {...field}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                className={styles['form__file']}
                error={errors['document']?.message}
                label={'Attach your CV'}
              />
            )
          }}
        />
        <ButtonPrimary
          type="submit"
          className={styles['form__button']}
          size={'large'}
          variant={'green'}
          isLoading={sending}
        >
          Apply
        </ButtonPrimary>
      </form>
      <AnimatePresence>
        {isVisible.visible && (
          <FormPopup setIsVisible={setIsVisible} error={isVisible.error} />
        )}
      </AnimatePresence>
    </>
  )
}

export default BodyForm
