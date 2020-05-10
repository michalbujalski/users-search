import React from "react";
import UserSearchPage from "./pages/UserSearch.page";
import { UsersProvider } from "./context/users/Users.context";
import styled from "styled-components";

const Layout = styled.div`
  font-family: Arial;
`;

function App() {
  return (
    <Layout>
      <UsersProvider>
        <UserSearchPage />
      </UsersProvider>
    </Layout>
  );
}

export default App;
