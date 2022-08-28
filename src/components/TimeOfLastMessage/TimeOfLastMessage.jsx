import { TimeOfLastMessageStyled } from './TimeOfLastMessage.styled';
import moment from 'moment';

export const TimeOfLastMessage = ({ messages }) => {
  return (
    messages[messages.length - 1]?.createdAT && (
      <TimeOfLastMessageStyled>
        {moment(messages[messages.length - 1].createdAT).format('MMM DD, GGGG')}
      </TimeOfLastMessageStyled>
    )
  );
};
