import { Contact } from './Contact';

import { ListStyle } from './Contacts.styled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(state => state.items);
  const input = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ListStyle>
      {filteredContacts.map(({ name, id, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ListStyle>
  );
};
