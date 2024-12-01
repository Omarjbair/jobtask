'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
    isLogIn: boolean
}

const initialState: CounterState = {
    isLogIn: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLogIn = !state.isLogIn;
        }
    }
})

export const { logIn } = loginSlice.actions;

export default loginSlice.reducer;