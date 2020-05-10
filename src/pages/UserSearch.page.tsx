import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import SearchInput from "../components/search-input/SearchInput.component";
import { useUsers } from "../context/users/Users.context";
import UsersList from "../components/users-list/UserList.component";
import { User } from "../context/users/Users.models";
import Loader from "../components/loader/Loader.component";

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const UsersListLayout = styled.div`
  margin-top: 32px;
`;

export const filterUsers = (query: string | null, users: User[]) => {
  if (query) {
    return users.filter((user) => {
      return user.name.toLowerCase().match(query.toLowerCase()) !== null;
    });
  } else {
    return users;
  }
};

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
    setList(filterUsers(state.searchQuery, state.allUsers));
  }, [state.allUsers, state.searchQuery]);

  return (
    <Layout>
      <h1>Users list</h1>
      <SearchInput
        placeholder="Search by user name"
        onChange={handleInputChange}
      />
      {state.isLoading && <Loader />}
      <UsersListLayout>
        <UsersList users={list} />
      </UsersListLayout>
    </Layout>
  );
};
