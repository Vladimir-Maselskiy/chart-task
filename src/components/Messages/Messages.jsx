import { IMGStyled } from 'components/ContactItem/ContactItem.styled';
import { MessageTime } from 'components/MessageTime/MessageTime';
import { ListStyled, MessageItem, MessageStyled } from './Messages.styled';

export const Messages = ({ currentContact }) => {
  const { messages, avatar, name } = currentContact;
  return (
    <ListStyled>
      {messages.map(message => (
        <MessageItem key={message.id} type={message.type}>
          {message.type === 'incoming' && (
            <IMGStyled src={avatar} alt={name} width="40px" height="40px" />
          )}
          <MessageStyled type={message.type}>
            <span> {message.value}</span>
            <MessageTime type={message.type} createdAt={message.createdAT} />
          </MessageStyled>
        </MessageItem>
      ))}
    </ListStyled>
  );
};
