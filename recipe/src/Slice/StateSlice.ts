// src/store/roleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: 'guest',
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    resetRole: (state) => {
      state.role = 'guest';
    },
  },
});

export const { setRole, resetRole } = roleSlice.actions;
export default roleSlice.reducer;
