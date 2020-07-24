import * as yup from 'yup';

const formSchema = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Username must be at least 3 characters')
		.required('Name is Required'),
});

export default formSchema;
