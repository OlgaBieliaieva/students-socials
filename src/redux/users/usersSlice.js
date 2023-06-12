import { createSlice } from '@reduxjs/toolkit';
import { refreshFollowings, fetchUsers } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    followings: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending]: handlePending,
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchUsers.rejected]: handleRejected,

    [refreshFollowings.pending]: handlePending,
    [refreshFollowings.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const i = state.items.findIndex(user => user.id === action.payload.id);
      state.items.splice(i, 1, { ...action.payload });
      if (state.followings.includes(action.payload.id)) {
        const index = state.followings.findIndex(
          item => item === action.payload.id
        );
        state.followings.splice(index, 1);
      } else {
        state.followings.push(action.payload.id);
      }
    },
    [refreshFollowings.rejected]: handleRejected,
  },
});

export const usersReducer = usersSlice.reducer;
