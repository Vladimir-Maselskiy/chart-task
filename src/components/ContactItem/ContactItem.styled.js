import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

export const ContactItemStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ccc;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
    background-color: #f5f5f5;
  }
`;

export const IMGStyled = styled.img`
  border-radius: 50%;
`;
export const AiOutlineCheckCircleStyled = styled(AiOutlineCheckCircle)`
  position: absolute;
  right: -5px;
  bottom: -2px;
  color: #659c6c;
`;
