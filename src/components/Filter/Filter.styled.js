import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: block;
  margin-bottom: 15px;
`;
export const FilterInput = styled.input`
  display: block;
  margin-top: 5px;
`;

export const BtnContainer = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const BtnFilter = styled.button`
  border: 1px solid tomato;
  border-radius: 4px;
  background-color: ${props => (props.selected ? `tomato` : `lightgray`)};
  &:hover,
  &:focus {
    background-color: tomato;
  }
  &:active {
    background-color: violet;
  }
`;

export const BtnFilterMargin = styled(BtnFilter)`
  margin-right: 10px;
`;
