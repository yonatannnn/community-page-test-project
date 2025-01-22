import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialUserState = {
    user: {
        id: 1,
        name: 'yonatan',
        profilePicture: 'https://scontent.fadd3-1.fna.fbcdn.net/v/t39.30808-6/305571752_3320848121482795_7896323846177778139_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGXmE2IdygYFU4pyCSdwLwSEG_w_dTcs3sQb_D91NyzeyvQXMq6h45CS0WjhGvERBbJj8ZzxiXuiIuVMkQZA3rp&_nc_ohc=VngJM-WcjzQQ7kNvgGUWeo5&_nc_zt=23&_nc_ht=scontent.fadd3-1.fna&_nc_gid=Ao7unlYlOgQNB6tqi66ZGdN&oh=00_AYCH5brwyTTSu4_OhDGQMgJbfTarXrTxgfvgLwAdxLYD7A&oe=67991924',
        username: 'yonatan',
        lastSeen: new Date().toISOString(),
        followers: [] as string[],
        following: [] as string[],
    },
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        resetUserState: (state) => {
            Object.assign(state, initialUserState);
        },
        assignName: (state, action) => {
            state.user.name = action.payload;
        },
        assignProfilePicture: (state, action) => {
            state.user.profilePicture = action.payload;
        },
        assignUsername: (state, action) => {
            state.user.username = action.payload;
        },
        setLastSeen: (state, action) => {
            state.user.lastSeen = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        addFollower: (state, action: PayloadAction<string>) => {
            state.user.followers.push(action.payload);
        },
        removeFollower: (state, action: PayloadAction<string>) => {
            state.user.followers = state.user.followers.filter(follower => follower !== action.payload);
        },
        addFollowing: (state, action: PayloadAction<string>) => {
            state.user.following.push(action.payload);
        },
        removeFollowing: (state, action: PayloadAction<string>) => {
            state.user.following = state.user.following.filter(following => following !== action.payload);
        },

    },
});

export const {
    resetUserState,
    assignName,
    assignProfilePicture,
    assignUsername,
    setLastSeen,
    setError,
    addFollower,
    removeFollower,
    addFollowing,
    removeFollowing,
} = userSlice.actions;

export default userSlice.reducer;
