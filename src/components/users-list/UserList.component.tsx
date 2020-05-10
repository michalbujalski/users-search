import React, { FC } from "react";
import { User } from "../../context/users/Users.models";
import UserListItem from "../users-list-item/UserListItem.component";

interface UsersListProps {
  users: User[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <UserListItem idx={idx + 1} user={user} key={user.id.toString()} />
        );
      })}
    </div>
  );
};

export default UsersList;
