import React from "react";
import { render } from "@testing-library/react";
import UserListItem from "./UserListItem.component";

describe("user list item", () => {
  it("renders user list item", () => {
    // given
    const idx = 456;
    const user = {
      id: 123,
      username: "AnnSm",
      name: "Ann Smith",
    };
    // when
    const { getByText } = render(<UserListItem idx={idx} user={user} />);
    const num = getByText(/456/i);
    const name = getByText(user.name);
    const username = getByText("@ " + user.username);
    // then
    expect(num).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(username).toBeInTheDocument();
  });
  it("valid form umatches snapshot", () => {
    // given
    const idx = 456;
    const user = {
      id: 123,
      username: "AnnSm",
      name: "Ann Smith",
    };
    // when
    const component = render(<UserListItem idx={idx} user={user} />);
    // then
    expect(component).toMatchSnapshot();
  });
});
