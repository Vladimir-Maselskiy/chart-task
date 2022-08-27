import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

export const InputStyled = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  background-color: #fafafa;
  border-radius: 15px;
  padding-left: 30px;
  border: 1px solid #ccc;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const AiOutlineSearchStyled = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #767676;
`;
