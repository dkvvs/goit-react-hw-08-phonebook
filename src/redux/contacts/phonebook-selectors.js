import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.reducer.loading;

const getContacts = state => state.reducer.contacts;

const getFilter = state => state.reducer.filter;

const getVisibleContact = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const phonebookSelectors = {
  getLoading,
  getFilter,
  getContacts,
  getVisibleContact,
};

export default phonebookSelectors;
