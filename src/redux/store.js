import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './FilmSlice';
import imageReducer from './ImageSlice'


export const store = configureStore({
    reducer: {
        films: filmReducer,
        images: imageReducer,
    }
});

export default store;