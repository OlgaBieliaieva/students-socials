import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, 
    // addContact, deleteContact, updateContact 
} from './operations';

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
    // [addContact.pending]: handlePending,
    // [addContact.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   state.items.push(action.payload);
    // },
    // [addContact.rejected]: handleRejected,
    // [deleteContact.pending]: handlePending,
    // [deleteContact.fulfilled](state, action) {
    //   console.log(action);
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.items.splice(index, 1);
    // },
    // [deleteContact.rejected]: handleRejected,
    // [updateContact.pending]: handlePending,
    // [updateContact.fulfilled](state, action) {     
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );      
    //   state.items.splice(index, 1, {...action.payload});
    // },
    // [updateContact.rejected]: handleRejected,
    // [logOut.fulfilled](state) {
    //   state.items = [];
    //   state.error = null;
    //   state.isLoading = false;
    // },
  },
});

export const usersReducer = usersSlice.reducer;