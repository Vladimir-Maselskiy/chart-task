import { MessageTimeStyled } from './MessageTime.styled';
import moment from 'moment';

export const MessageTime = ({ type, createdAt }) => {
  return (
    <MessageTimeStyled type={type}>
      {moment(createdAt).format('MM/DD/YY LT')}
    </MessageTimeStyled>
  );
};
