import { useState, useEffect } from 'react';
import { fetchMessage } from 'fetch/fetch';

export default function Message({ currentContact, setCurrentContact }) {
  const [newMessage, setNewMessage] = useState('');

  function onSubmit(evt) {
    evt.preventDefault();
    const currentMessage = evt.target.elements[0].value;
    setCurrentContact(prevState => {
      return {
        ...prevState,
        messages: [...prevState.messages, currentMessage],
      };
    });
    // currentContact.messages.push(currentMessage);
    setNewMessage(currentMessage);
    evt.target.reset();
  }

  useEffect(() => {
    if (newMessage) {
      fetchMessage().then(data => {
        setCurrentContact(prevState => {
          return {
            ...prevState,
            messages: [...prevState.messages, data.value],
          };
        });
      });
    }
  }, [newMessage, setCurrentContact]);

  return (
    <div>
      <img
        src={currentContact.img}
        alt={currentContact.name}
        width="20px"
      ></img>
      <p>{currentContact.name}</p>
      {currentContact.messages.length > 0 && (
        <ul>
          {currentContact.messages.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {/* <p>{dataValue}</p> */}
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="text"
            name="name"
            // value={sms}
            // onChange={onChange}
            // required
            placeholder="Type your massege"
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
