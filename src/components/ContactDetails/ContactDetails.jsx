import { useSelector } from 'react-redux';
import { selectContactInfo, selectContactIsLoading } from 'redux/selectors';
import { Puff } from 'react-loader-spinner';
import { LoaderContainer } from 'components/GlobalStyle';
import {
  DetailsContainer,
  ContactCard,
  ContactTitle,
  ContactData,
  LastElement,
  Span,
} from './ContactDetails.styled';

const ContactDetails = () => {
  const contact = useSelector(selectContactInfo);
  const isLoading = useSelector(selectContactIsLoading);

  return (
    <DetailsContainer>
      <ContactTitle>Here you can see contact details</ContactTitle>
      {!contact && isLoading && (
        <LoaderContainer>
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </LoaderContainer>
      )}
      {contact && !isLoading && (
        <ContactCard>
          <ContactData>
            Name: <Span>{contact.name}</Span>
          </ContactData>
          <ContactData>
            Phone number: <Span>{contact.phone}</Span>
          </ContactData>
          <ContactData>
            Cathegory: <Span>{contact.cathegory.join(', ')}</Span>
          </ContactData>
          <LastElement>Created: {contact.createdAt}</LastElement>
        </ContactCard>
      )}
    </DetailsContainer>
  );
};

export default ContactDetails;
