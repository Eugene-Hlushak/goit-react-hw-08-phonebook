import { Form, Field } from 'formik';
import styled from 'styled-components';

export const AddContactForm = styled(Form)`
  width: 300px;
  padding: 10px;

  border: 1px solid black;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: baseline;
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const CheckboxLabel = styled(FormLabel)`
  display: flex;
  width: 80px;
  font-weight: 400;
  font-size: 18px;
  margin-right: 10px;
`;

export const CheckboxLabelNoMarginRight = styled(CheckboxLabel)`
  margin-right: 0;
`;

export const LabelTitle = styled.span`
  width: 100px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled(Field)`
  display: block;
`;
