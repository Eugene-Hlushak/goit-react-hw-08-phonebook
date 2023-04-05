import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 148px;
  padding: 10px;
  border: 1px solid black;
`;

export const ContactTitle = styled.p`
  /* text-align: center; */
`;

export const ContactCard = styled.div`
  padding: 10px;
  width: 100%;
  background-color: wheat;
`;

export const ContactData = styled.p`
  margin-bottom: 5px;
`;
export const Span = styled.span`
  font-weight: 400;
  font-size: 16px;
`;

export const LastElement = styled(ContactData)`
  margin-bottom: 0;
`;
