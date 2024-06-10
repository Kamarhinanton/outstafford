import React, { useState } from 'react'
import TextField from '@/ui/TextField/TextField'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import FileField from '@/ui/FileField/FileField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/Contact/ui/BodyForm/validationSchema'
import Checkbox from '@/ui/Checkbox/Checkbox'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
import { FormData } from '@/utils/globalTypes'
import { sendContactForm } from '@/utils/api/sendContactForm'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

const FormPopup = dynamic(() => import('@/ui/FormPopup/FormPopup'), {
  ssr: false,
})

import styles from './BodyForm.module.scss'

const defaultValues = {
  interestGroup: [],
  email: '',
  message: '',
  name: '',
  budgetGroup: [],
  document: undefined,
}

const interestGroup = [
  { label: 'Mobile App Development' },
  { label: 'Web Development' },
  { label: 'UX/UI design' },
  { label: 'AI App Development' },
  { label: 'AI Integration' },
]

const budgetGroup = [
  { label: 'Not Sure' },
  { label: 'MVP: 10-30k' },
  { label: 'Business: 30-100k' },
  { label: 'Enterprise: >100k' },
]

const BodyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })
  const [sending, setSending] = useState(false)
  const [isVisible, setIsVisible] = useState({
    visible: false,
    message: '',
  })
  const onSubmit = async (data: FormData) => {
    setSending(true)
    try {
      await sendContactForm(data)
      setIsVisible((prev) => {
        return {
          ...prev,
          visible: true,
          message: 'The letter was sent successfully!',
        }
      })
      reset(defaultValues)
    } catch (error) {
      reset(defaultValues)
      setIsVisible((prev) => {
        return {
          ...prev,
          visible: true,
          message: 'Something went wrong',
        }
      })
    }
    setSending(false)
  }

  const watchedInterestGroup = watch(
    'interestGroup',
    defaultValues.interestGroup,
  )

  const watchedBudgetGroup = watch('budgetGroup', defaultValues.budgetGroup)

  const watchedDocument = watch('document', defaultValues.document)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <div className={styles['form__row']}>
          <p className={styles['form__row_description']}>
            I’m interested in...
          </p>
          <div className={styles['form__row_list']}>
            {interestGroup.map((item) => (
              <Controller
                control={control}
                key={item.label}
                name="interestGroup"
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    value={item.label}
                    title={item.label}
                    watchedCheckboxGroup={watchedInterestGroup}
                  />
                )}
              />
            ))}
            {errors['interestGroup'] && (
              <ErrorMessage
                className={styles['row-error']}
                error={errors['interestGroup']?.message}
              />
            )}
          </div>
        </div>
        <div className={styles['form__row']}>
          <p className={styles['form__row_description']}>
            Project budget (USD)
          </p>
          <div className={styles['form__row_list']}>
            {budgetGroup.map((item) => (
              <Controller
                control={control}
                key={item.label}
                name="budgetGroup"
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    value={item.label}
                    title={item.label}
                    watchedCheckboxGroup={watchedBudgetGroup}
                  />
                )}
              />
            ))}
            {errors['budgetGroup'] && (
              <ErrorMessage
                className={styles['row-error']}
                error={errors['budgetGroup']?.message}
              />
            )}
          </div>
        </div>
        <div
          className={classNames(styles['form__row'], styles['with-columns'])}
        >
          <Controller
            control={control}
            name={'name'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={styles['with-columns__col']}
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
                  className={styles['with-columns__col']}
                  placeholder="james@williams.com"
                  label={'Email'}
                  error={errors['email']?.message}
                />
              )
            }}
          />
          <Controller
            control={control}
            name={'message'}
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  className={classNames(
                    styles['with-columns__col'],
                    styles['full'],
                  )}
                  element={'textarea'}
                  label={'Your message'}
                  placeholder={
                    'Project details, deadlines – everything you think we need to know about our collaboration.'
                  }
                  error={errors['message']?.message}
                />
              )
            }}
          />
        </div>
        <Controller
          control={control}
          name={'document'}
          render={({ field }) => {
            return (
              <FileField
                {...field}
                watchedDocument={watchedDocument}
                error={errors['document']?.message}
                label={'Attach file (doc, docx, pdf - 15 mb)'}
              />
            )
          }}
        />
        <ButtonPrimary
          type="submit"
          className={styles['button']}
          size={'large'}
          variant={'green'}
          isLoading={sending}
        >
          Send
        </ButtonPrimary>
      </form>
      <AnimatePresence>
        {isVisible.visible && (
          <FormPopup setIsVisible={setIsVisible} message={isVisible.message} />
        )}
      </AnimatePresence>
    </>
  )
}

export default BodyForm
