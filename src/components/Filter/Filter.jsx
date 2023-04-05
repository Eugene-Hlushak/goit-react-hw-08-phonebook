import { useDispatch, useSelector } from 'react-redux';
import { showContactsByName, setStatusFilter } from 'redux/filter/filterSlice';
import { selectCathegoryFilter } from 'redux/selectors';
import { filterByCathegory } from 'redux/constants';
import {
  FilterLabel,
  FilterInput,
  BtnContainer,
  BtnFilter,
  BtnFilterMargin,
} from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const cathegory = useSelector(selectCathegoryFilter);

  return (
    <>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          name="filterName"
          onChange={e => {
            console.log(e.target.value);
            return dispatch(showContactsByName(e.target.value));
          }}
        />
      </FilterLabel>
      <BtnContainer>
        <BtnFilterMargin
          selected={cathegory === filterByCathegory.all}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.all))}
        >
          All
        </BtnFilterMargin>
        <BtnFilterMargin
          selected={cathegory === filterByCathegory.vip}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.vip))}
        >
          VIP
        </BtnFilterMargin>
        <BtnFilterMargin
          selected={cathegory === filterByCathegory.family}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.family))}
        >
          Family
        </BtnFilterMargin>
        <BtnFilterMargin
          selected={cathegory === filterByCathegory.friends}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.friends))}
        >
          Friends
        </BtnFilterMargin>
        <BtnFilter
          selected={cathegory === filterByCathegory.work}
          onClick={() => dispatch(setStatusFilter(filterByCathegory.work))}
        >
          Work
        </BtnFilter>
      </BtnContainer>
    </>
  );
}
