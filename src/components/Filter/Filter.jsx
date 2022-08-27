import { Box } from 'components/Box/Box';
import { AiOutlineSearchStyled } from './Filter.styled';
import { InputStyled } from './Filter.styled';

export default function Filter({ setFilter }) {
  const onChange = evt => {
    setFilter(evt.target.value);
  };

  return (
    <Box position="relative">
      <InputStyled
        onChange={onChange}
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search or start new chat"
      />
      <AiOutlineSearchStyled />
    </Box>
  );
}
