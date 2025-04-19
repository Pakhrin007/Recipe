// src/store/roleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoleState {
  role: string;
  userId: string | null; // Add userId to the state
}

const initialState: RoleState = {
  role: 'guest',
  userId: null, // Initialize userId as null
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRoleAndUserId: (
      state,
      action: PayloadAction<{ role: string; userId: string }>
    ) => {
      state.role = action.payload.role;
      state.userId = action.payload.userId;
    },
    resetRole: (state) => {
      state.role = 'guest';
      state.userId = null;
    },
  },
});

export const { setRoleAndUserId, resetRole } = roleSlice.actions;
export default roleSlice.reducer;