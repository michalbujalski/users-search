import React, { useEffect } from "react";
import styled from "styled-components";
import SearchInput from "../components/search-input/SearchInput.component";
import { useUsers } from "../context/users/Users.context";
import UsersList from "../components/users-list/UserList.component";

const Layout = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const UsersListLayout = styled.div`
  margin-top: 32px;
`;

export default () => {
  const { actions, state } = useUsers();

  useEffect(() => {
    actions.fetchUsers();
  }, []);

  return (
    <Layout>
      <h1>Users list</h1>
      <SearchInput placeholder="Search by user name" />
      <UsersListLayout>
        <UsersList users={state.allUsers} />
      </UsersListLayout>
    </Layout>
  );
};
