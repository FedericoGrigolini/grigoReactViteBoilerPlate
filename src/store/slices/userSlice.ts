// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types

const initialState = {
    name: '',
    surname: '',
    email: ''
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{
                user: typeof initialState;
                navigateCallback?: () => void;
            }>
        ) => {
            state = action.payload.user;

            if (action.payload.navigateCallback)
                action.payload.navigateCallback();
        },

        logout: state => {
            state = initialState;
        }
    }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
