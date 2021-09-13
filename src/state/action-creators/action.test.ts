import configureStore from "redux-mock-store";

import { ActionType } from "../action-types";
import { votesTestData } from "test/testdata";
import { setVotes } from "state/action-creators";
describe("add user redux", () => {
  const mockStore = configureStore();
  const reduxStore = mockStore();

  beforeEach(() => {
    reduxStore.clearActions();
  });

  describe(" vote action", () => {
    it("should dispatch the set vote action", () => {
      const expectedActions = [
        {
          type: ActionType.SET_VOTES,
          votes: votesTestData,
        },
      ];
      reduxStore.dispatch(setVotes(votesTestData));

      expect(reduxStore.getActions()).toEqual(expectedActions);
    });
  });
});
