import React, { useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/search-input/SearchInput.component";
import { useUsers } from "../context/users/Users.context";

const Wrapper = styled.button`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

export default () => {
  const { actions, state } = useUsers();

  useEffect(() => {
    actions.fetchUsers();
  }, []);
  return (
    <Wrapper>
      <SearchInput />
    </Wrapper>
  );
};
