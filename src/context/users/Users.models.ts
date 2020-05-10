
export interface User {
  id: Number
  name: String
  username: String
}

export interface UsersState {
  allUsers: User[]
  filteredUsers: User[] | null
  isLoading: boolean
  error: string | null
}

export const initialState: UsersState = {
  allUsers: [],
  isLoading: false,
  filteredUsers: null,
  error: null,
}