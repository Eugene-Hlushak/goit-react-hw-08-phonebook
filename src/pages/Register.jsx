import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from 'redux/auth/authOperations';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import {
  AddContactForm,
  FormInput,
  FormLabel,
  LabelTitle,
} from '../components/ContactForm/ContactForm.styled';

export default function Register() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);
  const navigate = useNavigate();

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

  if (userLoggedIn) navigate('/contacts', { replace: true });

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={signup}
      >
        <AddContactForm>
          <FormLabel>
            <LabelTitle>Login</LabelTitle>
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

          <button type="submit">Register</button>
          <Link to="/login">Allready have an account? Login.</Link>
        </AddContactForm>
      </Formik>
    </div>
  );
}
