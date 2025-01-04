import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "./axiosInstance";

// export const apiMethod ...
export const getFilmsByGenre = createAsyncThunk("films/getFilmsByGenre",async (genre, page = 0, size = 30) => {
    let url;
    if (page || size) {
        url = `http://localhost:4002/films/category/name/${genre}?page=${page}&size=${size}`;
    } else {
        url = `http://localhost:4002/films/category/name/${genre}`
    }
    const {data} = await axios(url);
    return data;    
})

const filmSlice = createSlice({
    name: "films",
    initialState: {
        items: {
            content: [],
            pageable: {
                pageNumber: 0,
                pageSize: null,
                sort: {
                    empty: true,
                    unsorted: true,
                    sorted: false,
                },
                offset: 0,
                paged: true,
                unpaged: false,
            },
            last: true,
            totalElements: 0,
            totalPages: 0,
            size: null,
            number: 0,
            sort: {
                empty: true,
                sorted: false,
                unsorted: true,
            },
            first: true,
            numberOfElements: 0,
            empty: false
        },
        loading: false,
        error: null,
        book: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getFilmsByGenre.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFilmsByGenre.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getFilmsByGenre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },

    });
    export default filmSlice.reducer;