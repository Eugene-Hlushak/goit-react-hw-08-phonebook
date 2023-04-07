import { useDispatch } from 'react-redux';
import { showContactsByName } from 'redux/filter/filterSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      Find contact by name
      <FilterInput
        type="text"
        name="filterName"
        onChange={e => {
          return dispatch(showContactsByName(e.target.value));
        }}
      />
    </FilterLabel>
  );
}
