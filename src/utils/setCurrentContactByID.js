export const setCurrentContactByID = (contacts, id) => {
  return contacts.find(contact => contact.id === id);
};
