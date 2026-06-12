import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

const authSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
   saveUser: (state, action) => {
    state.user = action.payload
   }
  },
});

export const { saveUser } = authSlice.actions;
export default authSlice.reducer;
