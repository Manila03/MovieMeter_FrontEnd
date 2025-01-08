import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "./axiosInstance";

// export const apiMethod ...

export const getAllFilms = createAsyncThunk("films/getAllFilms", async (params = {}) => {
    
    const { page = 0, size} = params;
    let url;
    if (page || size) {
        url = `http://localhost:4002/films/AllFilms?page=${page}&size=${size}`;
    } else {
        url = `http://localhost:4002/films/AllFilms`
    }
    const {data} = await axios(url);
    return data;
}
)

export const getFilmsByGenre = createAsyncThunk("films/getFilmsByGenre",async (params = {}) => {
    const { page = 0, size} = params;
    let url;
    if (page || size) {
        url = `http://localhost:4002/films/category/name/${genre}?page=${page}&size=${size}`;
    } else {
        url = `http://localhost:4002/films/category/name/${genre}`
    }
    console.log(url);
    const {data} = await axios(url);
    return data;
})


export const getLastFilms = createAsyncThunk("films/getLastFilms", async (params = {}) => {
    const { page = 0, size} = params;
    let url;
    if (page || size) {
        url = `http://localhost:4002/films/getLastFilms?page=${page}&size=${size}`;
        console.log("page", page, "size", size);
    } else {
        url = `http://localhost:4002/films/getLastFilms`;
        console.log("ni page ni size tienen valores");
    }
    console.log(url);
    const {data} = await axios(url);
    console.log(data);
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
        film: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getFilmsByGenre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFilmsByGenre.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getFilmsByGenre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getLastFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLastFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getLastFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(getAllFilms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllFilms.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(getAllFilms.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },

    });
    export default filmSlice.reducer;