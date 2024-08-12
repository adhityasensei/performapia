import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),

  required: yup
    .string()
    .required('Field is required'),

  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required').min(4, 'Password must be at least 4 characters'),
});
