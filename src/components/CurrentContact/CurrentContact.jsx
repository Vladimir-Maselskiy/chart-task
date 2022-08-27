import { Box } from 'components/Box/Box';
import {
  AiOutlineCheckCircleStyled,
  IMGStyled,
} from 'components/ContactItem/ContactItem.styled';

export const CurrentContact = ({
  currentContact: { id, createdAt, name, avatar } = {},
  setCurrentContact,
}) => {
  // const [newMessage, setNewMessage] = useState('');

  // function onSubmit(evt) {
  //   evt.preventDefault();
  //   const currentMessage = evt.target.elements[0].value;
  //   setCurrentContact(prevState => {
  //     return {
  //       ...prevState,
  //       messages: [...prevState.messages, currentMessage],
  //     };
  //   });
  //   // currentContact.messages.push(currentMessage);
  //   setNewMessage(currentMessage);
  //   evt.target.reset();
  // }

  // useEffect(() => {
  //   if (newMessage) {
  //     fetchMessage().then(data => {
  //       setCurrentContact(prevState => {
  //         return {
  //           ...prevState,
  //           messages: [...prevState.messages, data.value],
  //         };
  //       });
  //     });
  //   }
  // }, [newMessage, setCurrentContact]);

  return (
    id && (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        width="100%"
        height="70px"
        borderBottom="1px solid #ccc"
        padding="10px"
        bg="#f5f5f5"
      >
        <Box position="relative" width={40}>
          <IMGStyled src={avatar} alt={name} width="40px" height="40px" />
          <AiOutlineCheckCircleStyled />
        </Box>
        <Box ml={20}>
          <p>{name}</p>
        </Box>
      </Box>
    )
  );
};
