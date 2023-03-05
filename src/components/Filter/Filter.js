import { ImpytStyle, TextSpan, FiltrBox } from './Filter.styles';
import { useDispatch, useSelector } from 'react-redux';
import { phoneBook } from 'redux/phoneBook';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeValue = e => {
    const value = e.target.value.trim().toLowerCase();
    dispatch(phoneBook.actions.setFilter(value));
  };

  return (
    <>
      <FiltrBox>
        <TextSpan>Find contacts by name</TextSpan>
        <div>
          <ImpytStyle
            value={filter}
            onChange={onChangeValue}
            type="text"
            name="name"
            placeholder="Search"
          />
        </div>
      </FiltrBox>
    </>
  );
};
