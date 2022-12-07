import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const reducerLoginSlice = createSlice({
  name: 'Login',
  initialState: {status: 'idle', data: {}},
  extraReducers: builder => {
    builder
      .addCase(fetchAccount.pending, (state, action) => {
        state.status = 'loading account';
        console.log(state.status);
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle account';
        console.log(state.status);
      });
  },
});

export const fetchAccount = createAsyncThunk(
  'account/fetchAccount',
  async () => {
    const res = await fetch('api/account');
    const data = await res.json();
    return data.account;
  },
);
