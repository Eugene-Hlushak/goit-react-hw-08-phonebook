import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from 'redux/users/usersOperations';
import {
  AddContactForm,
  FormInput,
  FormLabel,
  LabelTitle,
} from '../components/ContactForm/ContactForm.styled';

export default function Register() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);

  const formInitialValues = {
    login: '',
    email: '',
    password: '',
  };

  const signup = values => {
    console.log(values);
    // dispatch(registerNewUser(values));
  };

  const validationSchema = object({
    login: string()
      .min(3, 'Too short name')
      .max(20, 'Too long name')
      .required(),
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
            <LabelTitle>Login</LabelTitle>
            <FormInput type="text" name="login" />
            <ErrorMessage name="login" />
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
