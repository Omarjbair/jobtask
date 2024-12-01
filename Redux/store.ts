'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slices/counterSlice';
import loginReducer from './Slices/loginSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        login: loginReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;