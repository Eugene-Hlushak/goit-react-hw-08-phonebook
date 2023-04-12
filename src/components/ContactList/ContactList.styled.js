import { ListItem, Stack } from '@mui/material';
import styled from '@emotion/styled';

export const ListContainer = styled(Stack)({
  width: '400px',
  height: '398px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '4px',
  overflowY: 'scroll',
});

export const ContactItem = styled(ListItem)({
  width: '100%',
  marginBottom: '10px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
});

export const Contact = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: '50px',
});

export const DeleteBtn = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'orangered',
    transition: 'background-color 350ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
