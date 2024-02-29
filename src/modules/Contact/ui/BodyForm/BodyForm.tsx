import React from 'react'
import Checkbox from '@/ui/Checkbox/Checkbox'
import TextField from '@/ui/TextField/TextField'
import classNames from 'classnames'

import styles from './BodyForm.module.scss'
import ButtonPrimary from '@/ui/ButtonPrimary/ButtonPrimary'

const BodyForm = () => {
  return (
    <form className={styles['form']} action="#">
      <div className={styles['form__row']}>
        <p className={styles['form__row_description']}>I’m interested in...</p>
        <div className={styles['form__row_list']}>
          <Checkbox title={'Mobile App Development'} />
          <Checkbox title={'Web Development'} />
          <Checkbox title={'UX/UI Design'} />
          <Checkbox title={'AI App Development'} />
          <Checkbox title={'AI Integration'} />
        </div>
      </div>
      <div className={styles['form__row']}>
        <p className={styles['form__row_description']}>Project budget (USD)</p>
        <div className={styles['form__row_list']}>
          <Checkbox title={'Not Sure'} />
          <Checkbox title={'MVP: 10-30k'} />
          <Checkbox title={'Business: 30-100k'} />
          <Checkbox title={'Enterprise: >100k'} />
        </div>
      </div>
      <div className={classNames(styles['form__row'], styles['with-columns'])}>
        <TextField
          className={styles['with-columns__col']}
          name={'Name'}
          label={'Name'}
          placeholder={'James Williams'}
        />
        <TextField
          className={styles['with-columns__col']}
          name={'Email'}
          label={'Email'}
          placeholder={'james@williams.com'}
        />
      </div>
      <div className={styles['form__row']}>
        <TextField
          name={'Your message'}
          element={'textarea'}
          label={'Your message'}
          placeholder={
            'Project details, deadlines – everything you think we need to know about our collaboration.'
          }
        />
      </div>
      <ButtonPrimary
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
