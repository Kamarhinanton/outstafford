import React from 'react'
import TextField from '@/ui/TextField/TextField'
import classNames from 'classnames'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import FileField from '@/ui/FileField/FileField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, Resolver, useForm } from 'react-hook-form'
import { validationSchema } from '@/modules/Contact/ui/BodyForm/validationSchema'
import Checkbox from '@/ui/Checkbox/Checkbox'

import styles from './BodyForm.module.scss'

export type FormData = {
  checkboxGroup: string[]
  email: string
  message: string
  name: string
  // budget: boolean[]
  // document: File | undefined;
}

const defaultValues = {
  checkboxGroup: [],
  email: '',
  message: '',
  name: '',
  // budget: [],
  // document: undefined,
}

const checkboxesGroup = [
  { label: 'Mobile App Development' },
  { label: 'Web Development' },
  { label: 'UX/UI design' },
  { label: 'AI App Development' },
  { label: 'AI Integration' },
]

const BodyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    trigger,
    watch,
  } = useForm<FormData>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormData>,
  })

  const onSubmit = (data: FormData) => {
    console.log('data', data)
  }

  const watchedCheckboxGroup = watch('checkboxGroup', [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
      <div className={styles['form__row']}>
        <p className={styles['form__row_description']}>I’m interested in...</p>
        <div className={styles['form__row_list']}>
          {checkboxesGroup.map((item) => (
            <Controller
              control={control}
              key={item.label}
              name="checkboxGroup"
              render={({ field }) => (
                <Checkbox
                  {...field}
                  value={item.label}
                  title={item.label}
                  watchedCheckboxGroup={watchedCheckboxGroup}
                />
              )}
            />
          ))}
          {errors['checkboxGroup']?.message}
        </div>
      </div>
      <div className={styles['form__row']}>
        <p className={styles['form__row_description']}>Project budget (USD)</p>
        {/*<div className={styles['form__row_list']}>*/}
        {/*  <Checkbox title={'Not Sure'} />*/}
        {/*  <Checkbox title={'MVP: 10-30k'} />*/}
        {/*  <Checkbox title={'Business: 30-100k'} />*/}
        {/*  <Checkbox title={'Enterprise: >100k'} />*/}
        {/*</div>*/}
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
      <FileField label={'Attach file (doc, docx, pdf - 15 mb)'} />
      <ButtonPrimary
        type="submit"
        className={styles['button']}
        size={'large'}
        variant={'green'}
      >
        Send
      </ButtonPrimary>
    </form>
  )
}

export default BodyForm
