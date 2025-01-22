import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import suggestedUsersSliceReducer from './slices/suggestedUser';
import userSlice from './slices/userSlice';
import commentSlice from './slices/commentSlice';

const store = configureStore({
    reducer: {
        post: postReducer,
        suggestedUsers: suggestedUsersSliceReducer,
        user: userSlice,
        comment : commentSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
