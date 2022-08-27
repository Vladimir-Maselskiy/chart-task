import { MessageTimeStyled } from './MessageTime.styled';

export const MessageTime = ({ type, createdAt }) => {
  return <MessageTimeStyled type={type}>{createdAt}</MessageTimeStyled>;
};
