import { Box } from 'components/Box/Box';
import { ContactItem } from '../ContactItem/ContactItem';

export default function ContactList({ contacts, onContactClick }) {
  return (
    <>
      <Box
        height="80px"
        display="flex"
        alignItems="center"
        pl="10px"
        color="#63a2c2"
      >
        <h2>Chats</h2>
      </Box>

      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            onClick={onContactClick}
            contact={contact}
          />
        ))}
      </ul>
    </>
  );
}
