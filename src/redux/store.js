import { configureStore } from '@reduxjs/toolkit';
import filmReducer from "./FilmSlice"


export const store = configureStore({
    reducer: {
        films: filmReducer,
    }
});

export default store;