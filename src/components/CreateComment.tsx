import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "../redux/slices/commentSlice";
import { addPostComment } from "../redux/slices/postSlice";
import User from "../models/user";
import "../styles/components/createComment.scss";
import PostComment from "../models/comment";
import PostModel from "../models/postModel";

export function CreateComment(post: PostModel) {
    const postId = post.id;
    const [text, setText] = useState("");
    const user: User = useSelector((state: any) => state.user).user;
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const comment: PostComment = {
            id: 0,
            user: user,
            text: text,
            createdAt: new Date().toISOString(),
            replies: [],
        };
        dispatch(addComment(comment));
        dispatch(addPostComment({ postId, comment }));
    };

    return (
        <Card className="create-comment-card">
            <form onSubmit={handleSubmit} className="create-comment-form">
                <div className="create-comment-avatar">
                    <Avatar>
                        <AvatarImage src={user.profilePicture} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <Textarea
                            placeholder="What's on your mind?"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="create-comment-textarea"
                        />
                    </div>
                </div>
                <div className="create-comment-actions">
                    <Button disabled={!text} className="btn-submit">
                        Comment
                    </Button>
                </div>
            </form>
        </Card>
    );
}
