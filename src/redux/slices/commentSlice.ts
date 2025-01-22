import PostComment from '../../models/comment';
import { comment1, comment2 } from '../../utils/MockComments';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
    comments: PostComment[];
}

const initialState: CommentState = {
    comments: [comment1, comment2],
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action: PayloadAction<PostComment>) => {
            state.comments.push(action.payload);
        },
        replyComment: (state, action: PayloadAction<{ id: number; comment: PostComment }>) => {
            const { id, comment } = action.payload;

            const updateReplies = (comments: PostComment[]): PostComment[] => {
                return comments.map((c) => {
                    if (c.id === id) {
                        return { ...c, replies: [...c.replies, comment] };
                    }
                    if (c.replies.length > 0) {
                        return { ...c, replies: updateReplies(c.replies) };
                    }
                    return c;
                });
            };

            state.comments = updateReplies(state.comments);
        },
        editComment: (state, action: PayloadAction<{ id: number; comment: PostComment }>) => {
            const comment = state.comments.find(comment => comment.id === action.payload.id);
            if (comment) {
                comment.text = action.payload.comment.text;
            }
        },
    },
});

export const { addComment, replyComment, editComment } = commentSlice.actions;

export default commentSlice.reducer;
