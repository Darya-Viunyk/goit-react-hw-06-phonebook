import { Filter } from 'components/Filter/Filter';
// import { useSelector } from 'react-redux';
import { Container, NameH2 } from './App.styled';
import { FormContacts } from 'components/FormContacts/FormContacts';
import { Contacts } from 'components/Contacts/Contacts';

export const App = () => {
  // const contacts = useSelector(state => {
  //   return state.items;
  // });
  // const filter = useSelector(state => {
  //   return state.filter;
  // });

  // const getFilteredContacts = () => {
  //   return contacts.filter(it => it.name.toLowerCase().includes(filter));
  // };
  // const filteredContacts = getFilteredContacts();
  return (
    <>
      <Container>
        <NameH2>Phonebook</NameH2>
        <div>
          <FormContacts />
        </div>
        <div>
          <NameH2>Contacts</NameH2>
          <Filter />

          <Contacts />
        </div>
      </Container>
    </>
  );
};
