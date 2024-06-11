import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  document: Yup.mixed().test(
    'fileSize',
    'File size must be no more than 15 MB',
    function (value) {
      if (value instanceof File) {
        return value.size <= 15 * 1024 * 1024
      }
      return true
    },
  ),
  formType: Yup.string()
    .equals(['type2'], 'Form type must be type2')
    .required('Form type is required'),
})
