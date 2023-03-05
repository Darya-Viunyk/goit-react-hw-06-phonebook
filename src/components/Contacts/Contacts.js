import { Contact } from './Contact';

import { ListStyle } from './Contacts.styled';
import { useSelector } from 'react-redux';

export const Contacts = () => {
  const contacts = useSelector(state => state.items);

  return (
    <ListStyle>
      {contacts.map(({ name, id, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ListStyle>
  );
};
