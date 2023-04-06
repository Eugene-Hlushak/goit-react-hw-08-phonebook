import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GlobalStyle,
  MainContainer,
  Title,
  Container,
  MainTitle,
} from '../components/GlobalStyle';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Container>
          <div style={{ marginRight: 20 }}>
            <Title>Add new contact</Title>
            <ContactForm />
          </div>
          <div>
            <Title>
              Contacts: {contacts.length > 0 && <span>{contacts.length}</span>}
            </Title>
            <Filter />
            <ContactList />
          </div>
        </Container>

        <Container></Container>
        <GlobalStyle />
      </MainContainer>
    </>
  );
}
