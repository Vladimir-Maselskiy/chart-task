import axios from 'axios';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { Box } from 'components/Box/Box';

import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  MdOutlineSendStyled,
} from './MessageCreator.styled';

export const MessageCreator = ({ currentContact, setContacts }) => {
  const onSubmit = evt => {
    console.log(moment(Date.now()).format('MMMM Do YYYY'));
    evt.preventDefault();
    const outgoingMessage = evt.target.elements.name.value;
    if (outgoingMessage === '') return;
    const outgoingMessageObj = {
      id: nanoid(),
      type: 'outgoing',
      createdAT: moment(Date.now()).format('MM/DD/YY LT'),
      value: outgoingMessage,
    };

    setContacts(prevState => {
      return prevState.map(contact =>
        contact.id === currentContact.id
          ? {
              ...contact,
              messages: [...contact.messages, outgoingMessageObj],
            }
          : contact
      );
    });

    axios.get('https://api.chucknorris.io/jokes/random').then(resp => {
      const { id, value } = resp.data;
      console.log(resp);
      const incomingMessageObj = {
        id,
        type: 'incoming',
        createdAT: moment(Date.now()).format('MM/DD/YY LT'),
        value,
      };
      setContacts(prevState => {
        return prevState.map(contact =>
          contact.id === currentContact.id
            ? {
                ...contact,
                messages: [...contact.messages, incomingMessageObj],
              }
            : contact
        );
      });
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
