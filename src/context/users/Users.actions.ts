import { UsersTypeAction } from "./Users.reducer"
import { UsersType } from "./Users.types"
import { fetchUsers as fetchUsersFromApi} from "../../api"

export interface UsersActions {
  fetchUsers: () => void,
  searchUsers: (query: string) => void
}

export const emptyActions: UsersActions = {
  fetchUsers:  () => {
    throw new Error("fetchUsers not initializded")
  },
  searchUsers:  (query: string) => {
    throw new Error("searchUsers not initializded")
  }
}

export const createActions = (dispatch: React.Dispatch<UsersTypeAction>): UsersActions => ({
  fetchUsers: async () => {
    dispatch({
      type: UsersType.FETCH_USERS_START, payload: null
    })
    try{
      const users = await fetchUsersFromApi()
      dispatch({
        type: UsersType.FETCH_USERS_SUCCESS,
        payload: users
      })
    }catch{
      dispatch({
        type: UsersType.FETCH_USERS_FAILURE,
        payload: 'There was an error while fetching users'
      })
    }

  },
  searchUsers: (query: string) => {

  }
})