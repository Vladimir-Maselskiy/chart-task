import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Box } from './Box/Box';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Anonymous } from './Anonymous/Anonymous';
import { getVisibleContacts } from 'utils/getVisibleContacts';
import { CurrentContact } from './CurrentContact/CurrentContact';
import { setCurrentContactByID } from 'utils/setCurrentContactByID';
import { MessageCreator } from './MessageCreator/MessageCreator';
import { Messages } from './Messages/Messages';
import { WellcomeMessage } from './WellcomeMessage/WellcomeMessage';

export function App() {
  const emptyArray = useRef(true);
  const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [visibleСontacts, setVisibleСontacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    axios
      .get('https://62e66c32de23e263792c05a8.mockapi.io/contacts')
      .then(resp => {
        setData(resp.data);
      });
  }, []);

  // Error 429 and React.Strict resolve
  useEffect(() => {
    if (emptyArray.current) {
      data.forEach((item, index) => {
        setTimeout(
          setContacts(prevState => {
            return [...prevState, item];
          }),
          index * 50
        );
      });
      if (data.length > 0) {
        emptyArray.current = false;
      }
    }
  }, [data, emptyArray]);

  useEffect(() => {
    setVisibleСontacts(getVisibleContacts(contacts, filter));
  }, [contacts, filter]);

  useEffect(() => {
    if (currentContact.id) {
      setCurrentContact(
        contacts.find(contact => contact.id === currentContact.id)
      );
    }
  }, [contacts, currentContact.id]);

  useEffect(() => {
    if (contacts.length > 1) {
      contacts.sort((a, b) => {
        const a1 = a.messages[a.messages.length - 1]?.createdAT || 0;
        const b1 = b.messages[b.messages.length - 1]?.createdAT || 0;
        return b1 - a1;
      });
    }
  }, [contacts]);

  const onContactClick = id => {
    setCurrentContact(setCurrentContactByID(contacts, id));
  };

  return (
    <Box display="flex" height="100vh" width="100vw">
      {contacts.length > 0 && (
        <Box display="flex" width={1} flexDirection="row">
          <Box
            display="flex"
            flexDirection="column"
            width={1 / 3}
            minWidth="170px"
            borderRight="1px solid #ccc"
          >
            <Box
              minHeight={140}
              p={20}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              bg="#f5f5f5"
              borderBottom="1px solid #ccc"
            >
              <Anonymous />
              <Filter setFilter={setFilter} />
            </Box>
            <ContactList
              contacts={visibleСontacts}
              onContactClick={onContactClick}
            />
          </Box>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
            width="100%"
          >
            {currentContact.id ? (
              <CurrentContact currentContact={currentContact}></CurrentContact>
            ) : (
              <WellcomeMessage />
            )}
            {currentContact.messages && (
              <Messages currentContact={currentContact} />
            )}
            {currentContact.id && (
              <MessageCreator
                currentContact={currentContact}
                setCurrentContact={setCurrentContact}
                setContacts={setContacts}
              ></MessageCreator>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
