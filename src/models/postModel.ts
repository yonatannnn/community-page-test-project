import User from './user';
import Like from './like';
import Share from './share';
import PostComment from './comment';

interface PostModel {
    id: number;
    user: User;
    textContent?: string;
    pictureContent?: string;
    createdAt: string;
    comments: PostComment[];
    likes: Like[];
    shares: Share[];
}

export default PostModel;