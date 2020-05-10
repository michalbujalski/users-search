import React from "react";
import UserSearchPage from "./pages/UserSearch.page";
import { UsersProvider } from "./context/users/Users.context";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <UserSearchPage />
      </UsersProvider>
    </div>
  );
}

export default App;
