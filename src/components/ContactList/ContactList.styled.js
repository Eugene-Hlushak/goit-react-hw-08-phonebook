import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  height: 237px;
  padding: 10px;
  border: 1px solid black;
  overflow-y: scroll;
`;

export const ContactItem = styled.li`
  width: 100%;

  margin-bottom: 10px;
  background-color: #ffffff;
`;

export const Contact = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const GetContactInfo = styled.button`
  width: 100%;
  height: 30px;
  margin-right: 15px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    scale: 1.05;
    background-color: wheat;
    transition: scale 350ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    background-color: orangered;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
