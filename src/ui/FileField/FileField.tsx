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
    <>
      <ul className={styles['upload-list']}>
        {uploadedFiles.map((file) => (
          <li className={styles['upload-list__link']} key={file.name}>
            <Paperclip className={styles['upload-list__link_paperclip']} />
            <div className={styles['upload-list__link_description']}>
              <p className={styles['top']}>{file.name}</p>
              <p className={styles['bottom']}>
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
      <div
        className={classNames(
          styles['file-field'],
          isDragAccept ? styles['accept'] : '',
        )}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <Paperclip className={styles['file-field__icon']} />
        <p className={styles['file-field__text']}>
          Attach file (doc, docx, pdf - 15 mb)
        </p>
      </div>
    </>
  )
}

export default FileField
