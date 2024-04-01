import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SystemState {
    playingSearchVideo: string;
}

const initialState: SystemState = {
    playingSearchVideo: ''
}


const systemSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPlayingSearchVideo: (state, action: PayloadAction<string>) => {
      state.playingSearchVideo = action.payload;
    },
  },
})

export const { setPlayingSearchVideo } = systemSlice.actions
export default systemSlice.reducer