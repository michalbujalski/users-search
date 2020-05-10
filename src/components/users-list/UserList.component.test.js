import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList.component";

describe("user list", () => {
  it("renders user list", () => {
    // given
    const users = [
      {
        id: 1,
        name: "name#1",
        username: "username#1",
      },
      {
        id: 2,
        name: "name#2",
        username: "username#2",
      },
      {
        id: 3,
        name: "name#3",
        username: "username#3",
      },
    ];
    // when
    const { getByText } = render(<UserList users={users} />);
    // then
    const username1 = getByText(/username#1/i);
    const username2 = getByText(/username#2/i);
    const username3 = getByText(/username#3/i);
    expect(username1).toBeInTheDocument();
    expect(username2).toBeInTheDocument();
    expect(username3).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    // given
    const users = [
      {
        id: 1,
        name: "name#1",
        username: "username#1",
      },
      {
        id: 2,
        name: "name#2",
        username: "username#2",
      },
      {
        id: 3,
        name: "name#3",
        username: "username#3",
      },
    ];
    // when
    const component = render(<UserList users={users} />);
    // then
    expect(component).toMatchSnapshot();
  });
});
