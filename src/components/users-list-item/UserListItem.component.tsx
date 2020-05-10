import React, { FC } from "react";
import { User } from "../../context/users/Users.models";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  text-align: left;
  padding: 8px;
  > * {
    margin-right: 32px;
  }
`;
const Idx = styled.div``;

const Name = styled.div`
  font-weight: bold;
`;
const Username = styled.div`
  color: #cccccc;
`;

interface UserListItemProps {
  idx: Number;
  user: User;
}

const UserListItem: FC<UserListItemProps> = ({ idx, user }) => {
  return (
    <Layout>
      <Idx>{idx}</Idx>
      <Name>{user.name}</Name>
      <Username>@ {user.username}</Username>
    </Layout>
  );
};

export default UserListItem;
