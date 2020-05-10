import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import SearchInput from "../components/search-input/SearchInput.component";
import { useUsers } from "../context/users/Users.context";
import UsersList from "../components/users-list/UserList.component";
import { User } from "../context/users/Users.models";

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const UsersListLayout = styled.div`
  margin-top: 32px;
`;

export default () => {
  const [list, setList] = useState<User[]>([]);
  const { actions, state } = useUsers();
  const handleInputChange = useCallback(
    (e) => {
      actions.filterUsers(e.target.value);
    },
    [actions.filterUsers]
  );
  useEffect(() => {
    actions.fetchUsers();
  }, []);

  useEffect(() => {
    if (state.searchQuery) {
      const query: String = state.searchQuery;
      console.log(query);
      const list = state.allUsers.filter((user) => {
        return user.name.toLowerCase().match(query.toLowerCase()) !== null;
      });
      setList(list);
    } else {
      setList(state.allUsers);
    }
  }, [state.allUsers, state.searchQuery]);

  return (
    <Layout>
      <h1>Users list</h1>
      <SearchInput
        placeholder="Search by user name"
        onChange={handleInputChange}
      />
      <UsersListLayout>
        <UsersList users={list} />
      </UsersListLayout>
    </Layout>
  );
};
