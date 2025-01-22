import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PostModel from '../../models/postModel';
import mockPosts from '../../utils/MockPosts';
import PostComment from '../../models/comment';

interface PostState {
    posts: PostModel[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: PostState = {
    posts: mockPosts,
    status: 'idle',
    error: null,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<PostModel>) => {
            state.posts.unshift(action.payload);
        },
        removePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => String(post.id) !== action.payload);
        },
        resetPostState: (state) => {
            Object.assign(state, initialState);
        },
        likePost: (state, action: PayloadAction<{ postId: number; username: string }>) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                post.likes.push({ user: action.payload.username, createdAt: new Date().toISOString() });
            }
        },
        unlikePost: (state, action: PayloadAction<{ postId: number; username: string }>) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                post.likes = post.likes.filter(like => like.user !== action.payload.username);
            }
        },
        addPostComment: (state, action: PayloadAction<{ postId: number; comment: PostComment }>) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                post.comments.push(action.payload.comment);
            }
        },

            
    }
});


export const { addPost, removePost, resetPostState , likePost, unlikePost , addPostComment } = postSlice.actions;
export default postSlice.reducer;
