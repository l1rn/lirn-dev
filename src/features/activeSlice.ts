import { createSlice } from "@reduxjs/toolkit";

export interface ActiveStore {
    isActive: boolean;
}

const initialState: ActiveStore = {
    isActive: false,
};

export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        activate: (state: ActiveStore) => {
            state.isActive = true;
        },
        deactivate: (state: ActiveStore) => {
            state.isActive = false;
        },
        toggleActivate: (state: ActiveStore) => {
            state.isActive = !state.isActive;
        },
        setActiveState: (state: ActiveStore, action) => {
            state.isActive = action.payload;
        },
    },
});


export const { activate, deactivate, toggleActivate, setActiveState  } = activeSlice.actions;
export default activeSlice.reducer;