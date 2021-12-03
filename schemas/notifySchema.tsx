import * as yup from 'yup';

// There we could use i18n for messages https://lokalise.com/blog/react-i18n-intl/ when page would be multi language

export const notifySchema = yup.object().shape({
    email: yup.string().email('Please specify correct email format').required('Field is required !'),
    message: yup.string().required('Field is required !'), // we want to allow any character in message field
    name: yup.string().required('Field is required !'),
    subject: yup.string().required('Field is required !'),
});
