import React, { createContext, useContext, FC, useReducer } from "react";
import { UsersState, initialState } from "./Users.models";
import { UsersActions, emptyActions, createActions } from "./Users.actions";
import reducer from "./Users.reducer";

type UsersContext = {
  state: UsersState;
  actions: UsersActions;
};

const UsersContextImpl = createContext<UsersContext>({
  state: initialState,
  actions: emptyActions,
});

export const useUsers = () => useContext(UsersContextImpl);

export const UsersProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state: { ...state },
    actions: { ...createActions(dispatch) },
  };
  return (
    <UsersContextImpl.Provider value={value}>
      {children}
    </UsersContextImpl.Provider>
  );
};
