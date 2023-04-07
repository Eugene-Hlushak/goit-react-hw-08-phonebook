import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  AddContactForm,
  FormInput,
  FormLabel,
  CheckboxContainer,
  LabelTitle,
  CheckboxLabel,
  CheckboxLabelNoMarginRight,
  Container,
} from './ContactForm.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const formInitialValues = {
    name: '',
    number: '',
  };

  const validationSchema = object({
    name: string()
      .min(3, 'Too short name')
      .max(20, 'Too long name')
      .required('Required'),
    number: string().required('Required'),
  });

  const saveNewContact = (values, { resetForm }) => {
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const checkContactNumber = contacts.find(
      contact => contact.number === values.number
    );

    if (checkContactName || checkContactNumber) {
      if (checkContactName) {
        alert(`${values.name} is already in contacts`);
        return;
      } else {
        alert(`${values.number} is already in contacts`);
        return;
      }
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={validationSchema}
      onSubmit={saveNewContact}
    >
      <AddContactForm>
        <FormLabel>
          <LabelTitle>Name</LabelTitle>
          <FormInput type="text" name="name" />
          <ErrorMessage name="name" />
        </FormLabel>

        <FormLabel>
          <LabelTitle>Number</LabelTitle>
          <FormInput type="tel" name="number" />
          <ErrorMessage name="number" />
        </FormLabel>
        <button type="submit">Add contact</button>
      </AddContactForm>
    </Formik>
  );
}
