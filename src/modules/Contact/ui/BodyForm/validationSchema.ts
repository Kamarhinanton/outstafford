import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  message: Yup.string().required('Message is required'),
  checkboxGroup: Yup.array()
    .of(Yup.string())
    .min(1, 'Please select at least one checkbox'),
})
