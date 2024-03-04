import React, { FC, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Paperclip from '../../../public/icons/paperclip.svg'
import classNames from 'classnames'
// import ErrorIcon from '../../../public/icons/error.svg'

import styles from './FileField.module.scss'

type FileFieldType = {
  label?: string
  // error?: string
  // onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  name?: string
  // value?: File
}

const FileField: FC<FileFieldType> = ({ label }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const { getRootProps, getInputProps, isDragAccept, inputRef } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles)
    },
    accept: {
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        ['.docx'],
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  })

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   onChange && onChange(e)
  // }

  const removeAcceptedFiles = () => {
    if (uploadedFiles.length > 0) {
      setUploadedFiles([])
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className={styles['file-field']}>
      {uploadedFiles.length > 0 && (
        <ul className={styles['file-field__list']}>
          {uploadedFiles.map((file) => (
            <li className={styles['file-field__list_link']} key={file.name}>
              <Paperclip className={styles['paperclip']} />
              <div className={styles['description']}>
                <p className={styles['description__top']}>{file.name}</p>
                <p className={styles['description__bottom']}>
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <div onClick={removeAcceptedFiles} className={styles['cross']}>
                <span></span>
                <span></span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div
        className={classNames(
          styles['file-field__content'],
          isDragAccept ? styles['accept'] : '',
        )}
        {...getRootProps()}
      >
        <input
          {...getInputProps()}
          // onChange={handleChange}
          // ref={ref}
          // value={value}
        />
        <Paperclip className={styles['file-field__content_icon']} />
        {label && <p className={styles['file-field__content_text']}>{label}</p>}
      </div>
      {/*{error && (*/}
      {/*  <p className={styles['file-field__error']}>*/}
      {/*    <ErrorIcon className={styles['file-field__error_icon']} />*/}
      {/*    <span className={styles['file-field__error_text']}>{error}</span>*/}
      {/*  </p>*/}
      {/*)}*/}
    </div>
  )
}

export default FileField
