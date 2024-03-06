import React from 'react'
import TextField from '@/ui/TextField/TextField'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import FileField from '@/ui/FileField/FileField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/Contact/ui/BodyForm/validationSchema'
import Checkbox from '@/ui/Checkbox/Checkbox'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'
// import FormPopup from '@/ui/FormPopup/FormPopup'

import styles from './BodyForm.module.scss'

export type FormData = {
  interestGroup: string[]
  email: string
  message: string
  name: string
  budgetGroup: string[]
  document: FileList | undefined
}

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
    // reset,
    // trigger,
    watch,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })

  const onSubmit = (data: FormData) => {
    console.log('data', data)
  }

  const watchedInterestGroup = watch(
    'interestGroup',
    defaultValues.interestGroup,
  )

  const watchedBudgetGroup = watch('budgetGroup', defaultValues.budgetGroup)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
      <div className={styles['form__row']}>
        <p className={styles['form__row_description']}>I’m interested in...</p>
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
        <p className={styles['form__row_description']}>Project budget (USD)</p>
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
      <div className={classNames(styles['form__row'], styles['with-columns'])}>
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
        // isLoading={true}
      >
        Send
      </ButtonPrimary>
      {/*<FormPopup visible={true} message={'The letter was sent successfully'} />*/}
    </form>
  )
}

export default BodyForm
