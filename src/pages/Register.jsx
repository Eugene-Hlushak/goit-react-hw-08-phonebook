import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { registerNewUser } from 'redux/users/usersOperations';
import {
  AddContactForm,
  FormInput,
  FormLabel,
  LabelTitle,
} from '../components/ContactForm/ContactForm.styled';

export default function Register() {
  const dispatch = useDispatch();

  console.log('sdfasdfsaf');
  const formInitialValues = {
    name: '',
    email: '',
    password: '',
  };

  const signup = values => dispatch(registerNewUser(values));

  const validationSchema = object({
    name: string().min(3, 'Too short name').max(20, 'Too long name').required(),
    email: string().required(),
    password: string().min(8).required(),
  });

  return (
    <div>
      <div>Register</div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={signup}
      >
        <AddContactForm>
          <FormLabel>
            <LabelTitle>login</LabelTitle>
            <FormInput type="text" name="name" />
            <ErrorMessage name="name" />
          </FormLabel>

          <FormLabel>
            <LabelTitle>Email</LabelTitle>
            <FormInput type="email" name="email" />
            <ErrorMessage name="email" />
          </FormLabel>
          <FormLabel>
            <LabelTitle>Password</LabelTitle>
            <FormInput type="password" name="password" />
            <ErrorMessage name="password" />
          </FormLabel>

          <button type="submit">Add contact</button>
        </AddContactForm>
      </Formik>
    </div>
  );
}
