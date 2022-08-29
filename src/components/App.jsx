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
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { IoLogInOutline, IoLogOutOutline } from 'react-icons/io5';
import { GoogleButtonStyled } from './MessageCreator/MessageCreator.styled';
import { UserLogIn } from './UserLogIn/UserLogIn';
import { sortContacts } from 'utils/sortContacts';

export function App() {
  const emptyArray = useRef(true);
  const [data, setData] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [visibleСontacts, setVisibleСontacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentContact, setCurrentContact] = useState({});
  const [userLogin, setUserLogin] = useState(null);
  const isSorted = useRef(false);

  useEffect(() => {
    axios
      .get('https://62e66c32de23e263792c05a8.mockapi.io/contacts')
      .then(resp => {
        setData(resp.data);
        sortContacts(resp.data, setData, isSorted);
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
  }, [data, emptyArray, contacts]);

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

  const setRefValue = value => {
    isSorted.current = value;
  };

  useEffect(() => {
    if (!isSorted.current) {
      sortContacts(contacts, setContacts, setRefValue);
    }
  }, [contacts]);

  const onContactClick = id => {
    setCurrentContact(setCurrentContactByID(contacts, id));
  };

  const clientId =
    '141257002444-3jn6k1q7gtq95d2cjbuo32iusbjh4vah.apps.googleusercontent.com';

  const responseGoogleonFailure = () => {
    console.log('Error');
  };

  const responseGoogleonSuccess = resp => {
    setUserLogin(resp.wt);
  };

  const logOut = () => {
    setUserLogin(null);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

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
              display="flex"
              justifyContent="space-between"
              minHeight={140}
              p={20}
              flexDirection="column"
              bg="#f5f5f5"
              borderBottom="1px solid #ccc"
            >
              <Box display="flex" justifyContent="space-between">
                {userLogin ? (
                  <UserLogIn userLogin={userLogin} />
                ) : (
                  <Anonymous />
                )}
                {userLogin ? (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText="Log out"
                    onLogoutSuccess={logOut}
                    render={renderProps => (
                      <GoogleButtonStyled
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <IoLogOutOutline size={40} color="#767676" />
                      </GoogleButtonStyled>
                    )}
                  />
                ) : (
                  <GoogleLogin
                    clientId="141257002444-3jn6k1q7gtq95d2cjbuo32iusbjh4vah.apps.googleusercontent.com"
                    render={renderProps => (
                      <GoogleButtonStyled
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <IoLogInOutline size={40} color="#767676" />
                      </GoogleButtonStyled>
                    )}
                    onSuccess={responseGoogleonSuccess}
                    onFailure={responseGoogleonFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                  />
                )}
              </Box>

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
                setRefValue={setRefValue}
                currentContact={currentContact}
                setContacts={setContacts}
              ></MessageCreator>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}
