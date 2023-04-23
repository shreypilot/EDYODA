import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isCaretUp: false,
   isCaretDown: false,
  isDropdownOpen: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
   toggleCaretUp: (state) => {
      state.isCaretUp = !state.isCaretUp;
      state.isCaretDown = false;
    },
    toggleCaretDown: (state) => {
      state.isCaretDown = !state.isCaretDown;
      state.isCaretUp = false;
    },
    resetCaret: (state) => {
      state.isCaretUp = false;
      state.isCaretDown = false;
    },
     toggleDropdown: (state) => {
      state.isDropdownOpen = !state.isDropdownOpen;
    },
   
  },
});

export const { toggleCaretUp,resetCaret,toggleCaretDown, toggleDropdown} = homeSlice.actions;
export default homeSlice.reducer;
