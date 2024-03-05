import React, { ForwardedRef, forwardRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Paperclip from '../../../public/icons/paperclip.svg'
import classNames from 'classnames'
import ErrorMessage from '@/ui/ErrorMessage/ErrorMessage'

import styles from './FileField.module.scss'

type FileFieldType = {
  label?: string
  onChange?: (e: File | undefined) => void
  name?: string
  error?: string
}

const FileField = forwardRef<HTMLInputElement, FileFieldType>(
  (
    { label, onChange, error }: FileFieldType,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const [uploadedFiles, setUploadedFiles] = useState<File | undefined>(
      undefined,
    )

    const { getRootProps, getInputProps, isDragAccept } = useDropzone({
      onDrop: (acceptedFiles) => {
        setUploadedFiles(acceptedFiles[0])
        handleChange(acceptedFiles[0])
      },
      accept: {
        'application/msword': ['.doc'],
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          ['.docx'],
        'application/pdf': ['.pdf'],
      },
      maxFiles: 1,
    })

    const handleChange = (file: File | undefined) => {
      onChange && onChange(file)
    }

    const removeAcceptedFiles = () => {
      if (uploadedFiles) {
        setUploadedFiles(undefined)
        handleChange(undefined)
      }
    }

    return (
      <div className={styles['file-field']}>
        {uploadedFiles && (
          <ul className={styles['file-field__list']}>
            {uploadedFiles && (
              <li
                className={styles['file-field__list_link']}
                key={uploadedFiles.name}
              >
                <Paperclip className={styles['paperclip']} />
                <div className={styles['description']}>
                  <p className={styles['description__top']}>
                    {uploadedFiles.name}
                  </p>
                  <p className={styles['description__bottom']}>
                    {(uploadedFiles.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
                <div onClick={removeAcceptedFiles} className={styles['cross']}>
                  <span></span>
                  <span></span>
                </div>
              </li>
            )}
          </ul>
        )}
        <div
          className={classNames(
            styles['file-field__content'],
            isDragAccept ? styles['accept'] : '',
          )}
          {...getRootProps()}
        >
          <input {...getInputProps()} ref={ref} />
          <Paperclip className={styles['file-field__content_icon']} />
          {label && (
            <p className={styles['file-field__content_text']}>{label}</p>
          )}
        </div>
        {error && <ErrorMessage error={error} />}
      </div>
    )
  },
)

export default FileField
