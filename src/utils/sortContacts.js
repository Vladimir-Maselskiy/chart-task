export const sortContacts = (contacts, setContacts, setRefValue) => {
  setContacts(
    [...contacts].sort((a, b) => {
      const a1 = a.messages[a.messages.length - 1]?.createdAT || 0;
      const b1 = b.messages[b.messages.length - 1]?.createdAT || 0;
      return b1 - a1;
    })
  );
  setRefValue(true);
};
