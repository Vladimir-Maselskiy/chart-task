import { Box } from 'components/Box/Box';
import {
  AiOutlineCheckCircleStyled,
  ContactItemStyled,
  IMGStyled,
} from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, createdAt, name, avatar },
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

      <Box ml="20px">
        <p>{name}</p>
      </Box>
    </ContactItemStyled>
  );
};
