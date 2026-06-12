import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
   saveUser: (state, action) => {
    state.user = action.payload
   }
  },
});

export const { saveUser } = todoSlice.actions;
export default todoSlice.reducer;
