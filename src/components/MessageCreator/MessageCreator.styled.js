import { MdOutlineSend } from 'react-icons/md';
import styled from 'styled-components';

export const InputStyled = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  background-color: #fafafa;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 30px;
  border: 1px solid #ccc;
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
`;
export const GoogleButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;

export const MdOutlineSendStyled = styled(MdOutlineSend)`
  color: #767676;
  :hover {
    cursor: pointer;
  }
`;
export const FormStyled = styled.form`
  width: 100%;
`;
