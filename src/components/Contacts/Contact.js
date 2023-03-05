import propTypes from 'prop-types';
import { Button, ItemLi } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { phoneBook } from 'redux/phoneBook';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemLi key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <Button
          type="button"
          onClick={() => dispatch(phoneBook.actions.delItem(id))}
        >
          Delete
        </Button>
      </ItemLi>
    </>
  );
};
Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
