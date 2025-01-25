import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/user';
import { suggestedUsers } from '../../utils/SuggestedUser';

const suggestedUsersSlice = createSlice({
    name: 'suggestedUsers',
    initialState: suggestedUsers,
    reducers: {
        setSuggestedUsers: (_, action: PayloadAction<User[]>) => {
            return action.payload;
        },
        addSuggestedUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload);
        },
        removeSuggestedUser: (state, action: PayloadAction<string>) => {
            return state.filter(user => user.username !== action.payload);
        },
        clearSuggestedUsers: () => {
            return [];
        },
    },
});

export const {
    setSuggestedUsers,
    addSuggestedUser,
    removeSuggestedUser,
    clearSuggestedUsers,
} = suggestedUsersSlice.actions;

export default suggestedUsersSlice.reducer;