import { createSlice } from '@reduxjs/toolkit';

import { UserState } from '../types/user-state';
import { changeUserStatus, deleteUser, getUsers } from './users.actions';


const initialState: UserState = {
  users: [],
  pending: {
    getUsers: false,
    delete: false,
    changeStatus: false,
  },
  errors: {
    getUsers: null,
    delete: null,
    changeStatus: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.pending.getUsers = true;
        state.errors.getUsers = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.pending.getUsers = false;
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state, action: any & { payload: any }) => {
        state.pending.getUsers = false;
        state.errors.getUsers = action.payload.error;
      })
      .addCase(deleteUser.pending, (state) => {
        state.pending.delete = true;
        state.errors.delete = null;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.pending.delete = false;
        state.users = state.users.filter(user => user.id !== payload.id);
      })
      .addCase(deleteUser.rejected, (state, action: any & { payload: any }) => {
        state.pending.delete = false;
        state.errors.delete = action.payload.error;
      })
      .addCase(changeUserStatus.pending, (state) => {
        state.pending.changeStatus = true;
        state.errors.changeStatus = null;
      })
      .addCase(changeUserStatus.fulfilled, (state, { payload }) => {
        state.pending.changeStatus = false;
        const user = state.users.find(user => user.id === payload.id);
        if (user) {
          user.status = payload.status; 
        }
      })
      .addCase(changeUserStatus.rejected, (state, action: any & { payload: any }) => {
        state.pending.changeStatus = false;
        state.errors.changeStatus = action.payload.error;
      });
  },
});

export const { resetUsers } = userSlice.actions;
export default userSlice.reducer;
