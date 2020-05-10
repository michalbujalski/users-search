import { UsersType } from "./Users.types";
import { UsersState } from "./Users.models";

export interface UsersTypeAction {
  type: UsersType,
  payload: any | null
}

export default (state: UsersState, actions: UsersTypeAction) => {
  switch(actions.type){
    case UsersType.FETCH_USERS_START:{
      return {...state, isLoading: true}
    }
    case UsersType.FETCH_USERS_SUCCESS:{
      return {...state, isLoading: false, allUsers: actions.payload}
    }
    case UsersType.FETCH_USERS_FAILURE:{
      return {...state, isLoading: false, error: actions.payload}
    }
    case UsersType.FILTER_USERS:{
      return {...state, searchQuery: actions.payload}
    }
  }
}