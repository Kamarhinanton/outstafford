import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  message: Yup.string().required('Message is required'),
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
  interestGroup: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one checkbox'),
  budgetGroup: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one checkbox'),
  formType: Yup.string()
    .equals(['type1'], 'Form type must be type1')
    .required('Form type is required'),
})
