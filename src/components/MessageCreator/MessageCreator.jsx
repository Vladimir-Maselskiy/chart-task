import axios from 'axios';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box/Box';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MdOutlineSendStyled,
} from './MessageCreator.styled';

export const MessageCreator = ({
  currentContact,
  setContacts,
  setRefValue,
}) => {
  const onSubmit = evt => {
    evt.preventDefault();
    const outgoingMessage = evt.target.elements.name.value;
    if (outgoingMessage === '') return;
    const outgoingMessageObj = {
      id: nanoid(),
      type: 'outgoing',
      createdAT: Date.now(),
      value: outgoingMessage,
    };
    setRefValue(false);
    setContacts(prevState => {
      return prevState.map(contact => {
        if (contact.id === currentContact.id) {
          axios.put(
            `https://62e66c32de23e263792c05a8.mockapi.io/contacts/${contact.id}`,
            {
              ...contact,
              messages: [...contact.messages, outgoingMessageObj],
            }
          );
          return {
            ...contact,
            messages: [...contact.messages, outgoingMessageObj],
          };
        }
        return contact;
      });
    });

    axios.get('https://api.chucknorris.io/jokes/random').then(resp => {
      const { id, value } = resp.data;
      const incomingMessageObj = {
        id,
        type: 'incoming',
        createdAT: Date.now(),
        value,
      };
      setTimeout(() => {
        setRefValue(false);
        setContacts(prevState => {
          return prevState.map(contact => {
            if (contact.id === currentContact.id) {
              axios.put(
                `https://62e66c32de23e263792c05a8.mockapi.io/contacts/${contact.id}`,
                {
                  ...contact,
                  messages: [...contact.messages, incomingMessageObj],
                }
              );
              return {
                ...contact,
                messages: [...contact.messages, incomingMessageObj],
              };
            }
            return contact;
          });
        });
      }, 5000 + Math.random() * 50);
    });
    evt.target.reset();
  };

  return (
    <Box
      position="relative"
      bottom={0}
      width="100%"
      height={90}
      bg="#f5f5f5"
      borderTop="1px solid #ccc"
      display="flex"
      alignItems="center"
      padding="10px"
    >
      <FormStyled onSubmit={onSubmit}>
        <InputStyled
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Type your message"
        />
        <ButtonStyled type="submit">
          <MdOutlineSendStyled size={20} />
        </ButtonStyled>
      </FormStyled>
    </Box>
  );
};
