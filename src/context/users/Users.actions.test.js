import { UsersType } from "./Users.types";
import { createActions } from "./Users.actions";
import * as api from "../../api";
jest.mock("../../api");

describe("Users actions", () => {
  let dispatch;
  let actions;
  beforeEach(() => {
    dispatch = jest.fn();
    actions = createActions(dispatch);
  });
  describe("fetch users", () => {
    it("should update users state when called", async () => {
      // given
      api.fetchUsers.mockImplementation(() => {
        return Promise.resolve([]);
      });
      // when
      await actions.fetchUsers();
      // then
      expect(dispatch).toBeCalledWith({
        type: UsersType.FETCH_USERS_START,
        payload: null,
      });
      expect(dispatch).toBeCalledWith({
        type: UsersType.FETCH_USERS_SUCCESS,
        payload: [],
      });
    });
    it("should update error when fetching users failed", async () => {
      // given
      api.fetchUsers.mockImplementation(() => {
        return Promise.reject();
      });
      // when
      await actions.fetchUsers();
      // then
      expect(dispatch).toBeCalledWith({
        type: UsersType.FETCH_USERS_START,
        payload: null,
      });
      expect(dispatch).toBeCalledWith({
        type: UsersType.FETCH_USERS_FAILURE,
        payload: "There was an error while fetching users",
      });
    });
  });
  describe("filter users", () => {
    it("should update search query with argument", () => {
      // given
      const query = "search";
      // when
      actions.filterUsers(query);
      // then
      expect(dispatch).toBeCalledWith({
        type: UsersType.FILTER_USERS,
        payload: query,
      });
    });
  });
});
