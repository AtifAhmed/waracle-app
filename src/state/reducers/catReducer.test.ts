import catReducer from "./catReducer";
import { ActionType } from "../action-types";
import { votesTestData } from "test/testdata";
import { Action } from "../actions";

describe("users reducer", () => {
  it("users  reducer expected state", () => {
    const action: Action = {
      type: ActionType.SET_VOTES,
      votes: votesTestData,
    };

    const updatedState = catReducer({ isLoading: false, cats: [], votes: [], favouriteCatImages: [] }, action);

    expect(updatedState.votes).toHaveLength(5);
  });
});
