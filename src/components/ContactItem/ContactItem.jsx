import { Box } from 'components/Box/Box';
import { TimeOfLastMessage } from 'components/TimeOfLastMessage/TimeOfLastMessage';
import {
  AiOutlineCheckCircleStyled,
  ContactItemStyled,
  IMGStyled,
} from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, name, avatar, messages },
  onContactClick,
}) => {
  return (
    <ContactItemStyled id={id} onClick={() => onContactClick(id)}>
      <Box position="relative">
        <IMGStyled
          loading="lazy"
          src={avatar}
          alt={name}
          width="40px"
          height="40px"
        />
        <AiOutlineCheckCircleStyled />
      </Box>

      <Box
        ml="20px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height={50}
      >
        <p>{name}</p>
        {messages.length > 0 && (
          <Box maxHeight={20} overflow="hidden" color="#767676">
            {messages[messages.length - 1].value}
          </Box>
        )}
      </Box>
      <Box ml="auto">
        <TimeOfLastMessage messages={messages} />
      </Box>
    </ContactItemStyled>
  );
};
