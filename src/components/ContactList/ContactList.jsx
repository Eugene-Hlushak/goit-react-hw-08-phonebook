import { useSelector } from 'react-redux';
import { Puff } from 'react-loader-spinner';
import ContactListItem from './ContactListItem';
import { selectVisibleContacts, selectItemsIsLoading } from 'redux/selectors';
import { LoaderContainer } from 'components/GlobalStyle';
import { List } from './ContactList.styled';

export default function ContactList() {
  const itemsIsLoading = useSelector(selectItemsIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {itemsIsLoading ? (
        <LoaderContainer>
          <Puff
            height="150"
            width="150"
            radius={3}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </LoaderContainer>
      ) : (
        visibleContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))
      )}
    </List>
  );
}
