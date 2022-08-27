import { useState } from 'react';

export default function Filter({ onClick }) {
  const [name, setName] = useState('');

  const entryName = evt => {
    setName();
    onClick(evt.target.value);
  };

  return (
    <form>
      <label>
        <input
          onChange={entryName}
          type="text"
          name="name"
          // id={idName}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          autoComplete="off"
          autoFocus
          placeholder="Search or start new chat"
        />{' '}
      </label>
    </form>
  );
}
