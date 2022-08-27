import { Box } from 'components/Box/Box';
import { AiOutlineCheckCircleStyled } from 'components/ContactItem/ContactItem.styled';
import photo from '../../data/images.png';
import { IMGStyled } from './Anonymous.styled';

export const Anonymous = () => {
  return (
    <Box position="relative" width={40}>
      <IMGStyled src={photo} alt="user photo" width={40} height={40} />
      <AiOutlineCheckCircleStyled />
    </Box>
  );
};
