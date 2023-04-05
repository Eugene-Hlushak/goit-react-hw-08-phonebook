import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { GoTrashcan } from 'react-icons/go';
import {
  deleteContact,
  getContactInfo,
} from 'redux/contacts/contactsOperations';
import {
  ContactItem,
  Contact,
  GetContactInfo,
  DeleteBtn,
} from './ContactList.styled';

export default function ContactListItem({
  contact: { name, phone, id, group },
}) {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Contact>
        <GetContactInfo
          onClick={() => {
            dispatch(getContactInfo(id));
          }}
        >
          <span>{name}</span>: <span>{phone}</span>
        </GetContactInfo>
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
