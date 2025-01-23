import PostComment from '../models/comment';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { useState } from 'react';
import '../styles/components/commentSection.scss';
import { replyComment, addComment } from '../redux/slices/commentSlice';
import { useSelector, useDispatch } from 'react-redux';

export function CommentSection({ comments }: { comments: PostComment[] }) {
    const [replyText, setReplyText] = useState<{ [key: number]: string }>({});
    const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({});
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user).user;

    const handleReplyChange = (id: number, text: string) => {
        setReplyText((prev) => ({
            ...prev,
            [id]: text,
        }));
    };
    

    const handleReplySubmit = (id: number) => {
        console.log('Replying to comment:', id);
        const comment: PostComment = {
            id: Math.floor(Math.random() * 1000),
            user: user,
            text: replyText[id],
            createdAt: new Date().toISOString(),
            replies: []
        };
        console.log('Reply:', comment);
        dispatch(addComment(comment));
        dispatch(replyComment({ id: id, comment: comment }));
        setReplyText((prev) => ({ ...prev, [id]: '' }));
    };

    const toggleReplies = (id: number) => {
        setShowReplies((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const renderComments = (comments: PostComment[], level = 0) => {
        return (
            <div className="comments">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment" style={{ marginLeft: `${level * 15}px` }}>
                        {/* Comment Header */}
                        <div className="comment-header">
                            <Avatar>
                                <AvatarImage src={comment.user.profilePicture} />
                                <AvatarFallback>{comment.user.username.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="comment-info">
                                <div className="comment-username">{comment.user.username}</div>
                                <p className="comment-text">{comment.text}</p>
                                <span className="comment-date">{new Date(comment.createdAt).toLocaleString()}</span>
                            </div>
                        </div>

                        {/* Reply Section */}
                        <div className="reply-section">
                                <Textarea
                                    placeholder="Write a reply..."
                                    value={replyText[comment.id] || ''} // Use the current comment's ID as the key
                                    onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                                    className="reply-textarea"
                                />


                            <div className="reply-actions">
                                <Button
                                    type="button"
                                    onClick={() => handleReplySubmit(comment.id)}
                                    disabled={!replyText[comment.id]}
                                    className="btn-submit-reply"
                                >
                                    Reply
                                </Button>
                                {comment.replies.length > 0 && (
                                    <Button
                                        type="button"
                                        onClick={() => toggleReplies(comment.id)}
                                        className="btn-toggle-replies"
                                    >
                                        {showReplies[comment.id] ? 'Hide Replies' : `View Replies (${comment.replies.length})`}
                                    </Button>
                                )}
                            </div>
                        </div>

                        {showReplies[comment.id] && (
                            <div className="comment-replies">{renderComments(comment.replies, level + 1)}</div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return <div className="comment-section">{renderComments(comments)}</div>;
}
