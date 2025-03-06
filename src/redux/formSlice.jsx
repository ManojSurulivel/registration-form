import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    }
  }
});

export const { registerUser } = formSlice.actions;
export default formSlice.reducer;
