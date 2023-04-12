import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { GoTrashcan } from 'react-icons/go';
import { deleteContact } from 'redux/contacts/contactsOperations';

import { ContactItem, Contact, DeleteBtn } from './ContactList.styled';

export default function ContactListItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Contact>
        <p>
          {name}: {number}
        </p>
        <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
          <GoTrashcan size={20} color={'black'} />
        </DeleteBtn>
      </Contact>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
