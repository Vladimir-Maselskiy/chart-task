import { Box } from 'components/Box/Box';
import { ContactItemStyled, IMGStyled } from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, createdAt, name, avatar },
  onContactClick,
}) => {
  return (
    <ContactItemStyled id={id} onClick={onContactClick}>
      <IMGStyled
        loading="lazy"
        src={avatar}
        alt={name}
        width="40px"
        height="40px"
      />
      <Box ml="20px">
        <p>{name}</p>
      </Box>
    </ContactItemStyled>
  );
};
