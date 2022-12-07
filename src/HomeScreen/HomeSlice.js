import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const reducerHomeSlice = createSlice({
  name: 'DetailCradle',
  initialState: {status: 'idle', data: []},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'loading Data';
        console.log(state.status);
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle Data';
        console.log(state.status);
      })

      .addCase(ChangeFanStatus.pending, (state, action) => {
        state.status = 'loading Fan';
        console.log(state.status);
      })
      .addCase(ChangeFanStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle Fan';
        console.log(state.status);
      })

      .addCase(ChangeMusicStatus.pending, (state, action) => {
        state.status = 'loading Music';
        console.log(state.status);
      })
      .addCase(ChangeMusicStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'idle Music';
        console.log(state.status);
      });
  },
});

// thunk function get data from server
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const res = await fetch('api/data');
  const data = await res.json();
  return data.data;
});

//thunk func change status fan
export const ChangeFanStatus = createAsyncThunk(
  'fan/changeFanStatus',
  async idFan => {
    const res = await fetch('api/data/updateFan', {
      method: 'POST',
      body: JSON.stringify(idFan),
    });
    const data = await res.json();
    console.log('Data from api:', data);
    return data.data;
  },
);

//thunk func change status fan
export const ChangeMusicStatus = createAsyncThunk(
  'fan/changeMusicStatus',
  async idMusic => {
    const res = await fetch('api/data/updateMusic', {
      method: 'POST',
      body: JSON.stringify(idMusic),
    });
    const data = await res.json();
    console.log('Data from api:', data);
    return data.data;
  },
);
