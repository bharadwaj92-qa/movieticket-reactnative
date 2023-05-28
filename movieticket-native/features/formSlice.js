import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    city: '',
    date: '',
    theatre: '',
    seats: '',
    seatnbr: '',
    movie: ''
  },
  reducers: {
    setCityy: (state, action) => {
      state.city = action.payload;
    },
    setDatee: (state, action) => {
      state.date = action.payload;
    },
    setTheatree: (state, action) => {
      state.theatre = action.payload;
    },
    setSeatss: (state, action) => {
      state.seats = action.payload;
    },
    setSeatNbrs: (state, action) => {
      state.seatnbr = action.payload;
    },
    setMoviee: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { setCityy, setDatee, setTheatree, setSeatss, setSeatNbrs, setMoviee } = formSlice.actions;
export default formSlice.reducer;
