import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectUserIsLoggedin } from 'redux/users/usersSelectors';
import {
  GlobalStyle,
  MainContainer,
  Title,
  Container,
  MainTitle,
} from '../components/GlobalStyle';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const userLoggenId = useSelector(selectUserIsLoggedin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!userLoggenId) navigate('/', { replace: true });

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
