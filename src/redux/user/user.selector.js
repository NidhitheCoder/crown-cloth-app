import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    // [selectUser,selectCart] you can use both  array and arguments if multiple items
  selectUser,
  (user) => user.currentUser
);
