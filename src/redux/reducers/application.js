import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAnimals = createAsyncThunk(
    'animals/fetch',
    async (term, { rejectWithValue }) => {
        try {
            // Try something
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

export const slice = createSlice({
    name: 'application',
    initialState: {
        input_value: ''
    },

    reducers: {
        setInputValue: (state, action) => {
            // store input value in state
        },
    },
});

export const { setInputValue } = slice.actions;

export default slice.reducer;