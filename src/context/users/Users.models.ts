
export interface User {
  id: Number
  name: String
  username: String
}

export interface UsersState {
  allUsers: User[]
  searchQuery: string | null
  isLoading: boolean
  error: string | null
}

export const initialState: UsersState = {
  allUsers: [],
  isLoading: false,
  searchQuery: null,
  error: null,
}