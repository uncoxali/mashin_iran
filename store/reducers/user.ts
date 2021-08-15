import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        data: {},
    },
    reducers: {
        login(state, action) {
            console.log(action, 'login');
            state.loggedIn = true;
        },
        setMeData(state, { payload }) {
            state.data = payload;
        },
    },
});

export const { setMeData, login } = slice.actions;

export default slice.reducer;
