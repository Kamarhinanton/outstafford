import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Paperclip from '../../../public/icons/paperclip.svg'
import classNames from 'classnames'

import styles from './FileField.module.scss'

const FileField = () => {
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
        <input {...getInputProps()} />
        <Paperclip className={styles['file-field__content_icon']} />
        <p className={styles['file-field__content_text']}>
          Attach file (doc, docx, pdf - 15 mb)
        </p>
      </div>
    </div>
  )
}

export default FileField
