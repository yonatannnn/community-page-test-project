import User from './user';

interface PostComment {
    id: number;
    user: User;
    text: string;
    createdAt: string;
    replies : PostComment[];
}

export default PostComment;