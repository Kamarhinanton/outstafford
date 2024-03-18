import React from 'react'
import { Controller, Resolver, useForm } from 'react-hook-form'
import TextField from '@/ui/TextField/TextField'
import FileField from '@/ui/FileField/FileField'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from './validationSchema'

import styles from './BodyForm.module.scss'

type FormDataCareer = {
  email: string
  name: string
  document: FileList | undefined
}

const defaultValues = {
  email: '',
  name: '',
  document: undefined,
}
const BodyForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    // reset,
    // trigger,
  } = useForm<FormDataCareer>({
    values: defaultValues,
    resolver: yupResolver(validationSchema) as Resolver<FormDataCareer>,
  })

  const onSubmit = (data: FormDataCareer) => {
    console.log('data', data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
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
        // isLoading={true}
      >
        Apply
      </ButtonPrimary>
      {/*<FormPopup visible={true} message={'The letter was sent successfully'} />*/}
    </form>
  )
}

export default BodyForm
