import { User } from "./context/users/Users.models";

const baseUrl = `https://jsonplaceholder.typicode.com/users`;

export const fetchUsers: () => Promise<User[]> = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
}