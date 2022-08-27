import { useState, useEffect, useRef } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
// import Message from './CurrentContact/CurrentContact';
import { Box } from './Box/Box';
import axios from 'axios';
import { Anonymous } from './Anonymous/Anonymous';

export function App() {
  const emptyArray = useRef(true);
  const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);
  // // const [filter, setFilter] = useState('');
  // const [currentContact, setCurrentContact] = useState(null);

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

  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  //   setCurrentContact(contacts[0]);
  // }, [contacts]);

  // useEffect(() => {
  //   if (currentContact) {
  //     setContacts(prevState => {
  //       return [
  //         currentContact,
  //         ...prevState.filter(item => {
  //           return item.id !== currentContact.id;
  //         }),
  //       ];
  //     });
  //   }
  // }, [currentContact]);

  // const changeInput = name => {
  //   setFilter(name);
  // };

  // const onChangeInput = () =>
  //   contacts.filter(item =>
  //     item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  //   );

  // const onContactClick = contact => {
  //   setCurrentContact(contact);
  // };

  return (
    contacts.length > 0 && (
      <Box display="flex" width={1} flexDirection="row">
        <Box width={1 / 3}>
          <Box height={120}>
            <Anonymous />
            <Filter />
          </Box>
          {/* // onClick={changeInput}
          /> */}
          <ContactList contacts={contacts} />
        </Box>
        {/* <Box>
          {currentContact && (
            <Message
              currentContact={currentContact}
              setCurrentContact={setCurrentContact}
            />
          )}
        </Box> */}
      </Box>
    )
  );
}
