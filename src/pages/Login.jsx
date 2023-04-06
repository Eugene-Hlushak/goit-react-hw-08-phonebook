import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/users/usersOperations';
import { selectUserIsLoggedin } from 'redux/users/usersSelectors';
import {
  AddContactForm,
  FormInput,
  FormLabel,
  LabelTitle,
} from '../components/ContactForm/ContactForm.styled';

export default function Login() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(selectUserIsLoggedin);
  const navigate = useNavigate();

  const formInitialValues = {
    email: '',
    password: '',
  };

  const signup = values => dispatch(loginUser(values));

  if (userLoggedIn) navigate('/contacts', { replace: true });

  const validationSchema = object({
    email: string().required(),
    password: string().min(8).required(),
  });

  return (
    <div>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationSchema}
        onSubmit={signup}
      >
        <AddContactForm>
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

          <button type="submit">Login</button>
          <Link to="/">Haven't account? Register.</Link>
        </AddContactForm>
      </Formik>
    </div>
  );
}
