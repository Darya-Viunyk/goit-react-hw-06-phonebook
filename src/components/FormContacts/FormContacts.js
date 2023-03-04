import { nanoid } from 'nanoid';
import { Label, NameLabel, Button } from './FormContacts.styled';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { phoneBook } from 'redux/phoneBook';

const Conteiner = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #dedada;
  padding: 10px 10px;
  border-radius: 5px;
`;
const Inpyt = styled(Field)`
  padding: 10px 10px;
  width: auto;
  outline: none;
  border: 1px solid #bbb;
  border-radius: 5px;
  display: block;
`;
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(7).max(11).required(),
});

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);

  const getContact = contact => contacts.some(it => it.name === contact.name);

  const handleSudmit = event => {
    event.preventDefault();
    const form = event.target;
    const contact = {
      id: nanoid(4),
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    if (getContact(contact)) {
      alert(`${contact.name} is alredy in contacts`);
      return;
    }

    dispatch(phoneBook.actions.addItem(contact));
    form.reset();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={schema}>
      <Conteiner onSubmit={handleSudmit}>
        <Label>
          <NameLabel>Name</NameLabel>

          <Inpyt
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <NameLabel>Number</NameLabel>
          <Inpyt
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Conteiner>
    </Formik>
  );
};
