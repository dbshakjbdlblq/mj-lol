import styled from '@emotion/styled';
import { ReactComponent as Search } from '../../../../assets/searchIcon.svg';

export const Container = styled.form`
  width: 60%;
  height: 30px;
  background-color: white;
  display: flex;
  border-radius: 8px;
  padding: 10px 15px;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
`;

export const SearchIcon = styled(Search)`
  cursor: pointer;
  width: 20px;
  fill: gray;
`;
