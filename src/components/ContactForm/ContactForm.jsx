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
    phone: '',
    cathegory: [],
  };

  const validationSchema = object({
    name: string()
      .min(3, 'Too short name')
      .max(20, 'Too long name')
      .required('Required'),
    phone: string().required('Required'),
  });

  const saveNewContact = (values, { resetForm }) => {
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const checkContactNumber = contacts.find(
      contact => contact.phone === values.phone
    );

    if (checkContactName || checkContactNumber) {
      if (checkContactName) {
        alert(`${values.name} is already in contacts`);
        return;
      } else {
        alert(`${values.phone} is already in contacts`);
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
          <LabelTitle>Phone</LabelTitle>
          <FormInput type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </FormLabel>

        <CheckboxContainer>
          <LabelTitle>Cathegory</LabelTitle>
          <Container>
            <CheckboxLabel>
              <FormInput type="checkbox" name="cathegory" value="Friends" />
              Friends
            </CheckboxLabel>
            <CheckboxLabelNoMarginRight>
              <FormInput type="checkbox" name="cathegory" value="Family" />
              Family
            </CheckboxLabelNoMarginRight>
            <CheckboxLabel>
              <FormInput type="checkbox" name="cathegory" value="Vip" />
              Vip
            </CheckboxLabel>
            <CheckboxLabelNoMarginRight>
              <FormInput type="checkbox" name="cathegory" value="Work" />
              Work
            </CheckboxLabelNoMarginRight>
          </Container>
        </CheckboxContainer>
        <button type="submit">Add contact</button>
      </AddContactForm>
    </Formik>
  );
}
