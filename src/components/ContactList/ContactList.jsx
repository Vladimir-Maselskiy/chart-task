import { Box } from 'components/Box/Box';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export default function ContactList({ contacts, onContactClick }) {
  return (
    <>
      <Box
        height="80px"
        display="flex"
        alignItems="center"
        pl="10px"
        color="#4e9fc5"
      >
        <h2>Chats</h2>
      </Box>

      <ContactListStyled>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            onContactClick={onContactClick}
            contact={contact}
          />
        ))}
      </ContactListStyled>
    </>
  );
}
