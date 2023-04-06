import { createSelector } from '@reduxjs/toolkit';
import {
  selectCathegoryFilter,
  selectFilterName,
} from 'redux/filter/filterSelectors';

export const selectContacts = state => state.contacts.items;
export const selectItemsIsLoading = state => state.contacts.itemsIsLoading;
export const selectContactInfo = state => state.contacts.contact;
export const selectContactIsLoading = state => state.contacts.contactIsLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectCathegoryFilter, selectFilterName],
  (contacts, cathegory, filter) => {
    if (cathegory === 'all') return filteredContacts(contacts, filter);

    const visibleContacts = contacts.filter(contact =>
      contact.cathegory.includes(cathegory)
    );

    return filteredContacts(visibleContacts, filter);
  }
);

const filteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
