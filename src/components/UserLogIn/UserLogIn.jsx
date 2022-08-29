import { Box } from 'components/Box/Box';
// import { AiOutlineCheckCircleStyled } from 'components/ContactItem/ContactItem.styled';
// import { IMGStyled } from './UserLogIn.styled';

export const UserLogIn = ({ userLogin }) => {
  return (
    <Box>
      <p>{userLogin.Ad}</p>
      <p>{userLogin.cu}</p>
    </Box>
  );
};
