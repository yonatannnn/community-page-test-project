import { useState } from "react";
import { Card } from "@/components/ui/card";
import { AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { unlikePost, likePost } from "@/redux/slices/postSlice";
import PostModel from "../models/postModel";
import { CommentSection } from "./CommentSection";
import { CreateComment } from "./CreateComment";
import "../styles/components/Post.scss";
import "../styles/components/commentModal.scss";

export function PostCard(post: PostModel) {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state: any) => state.user).user;
  const dispatch = useDispatch();

  return (
    <>
      <Card className="card">
        <div className="card-header">
          <div className="avatar">
            {post.user.profilePicture ? (
              <img src={post.user.profilePicture} alt={post.user.username} />
            ) : (
              <AvatarFallback>{post.user.username.charAt(0)}</AvatarFallback>
            )}
          </div>
          <div className="user-details">
            <div>
              <span className="username">{post.user.username}</span>
              <span className="last-seen">• {String(post.user.lastSeen)}</span>
            </div>
            <button className="post-options">•••</button>
          </div>
        </div>
        <p className="post-content">{post.textContent}</p>
        {post.pictureContent && (
          <div className="post-image">
            <img src={post.pictureContent || "/placeholder.svg"} alt="Post image" />
          </div>
        )}
        <div className="post-actions">
          <button
            className={`like-button ${
              post.likes.some((like) => like.user === user.username) ? "active" : ""
            }`}
            onClick={() => {
              if (post.likes.some((like) => like.user === user.username)) {
                dispatch(unlikePost({ postId: post.id, username: user.username }));
              } else {
                dispatch(likePost({ postId: post.id, username: user.username }));
              }
            }}
          >
            <Heart />
            {post.likes.length} Likes
          </button>
          <button onClick={() => setShowModal(true)}>
            <MessageCircle />
            {post.comments.length > 0 ? `${post.comments.length} Comments` : "Comment"}
          </button>
          <button>
            <Share2 />
            Share
          </button>
        </div>
        <hr className="divider" />
        <div>
          <CreateComment {...post} />
        </div>
      </Card>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Comments</h3>
              <button className="close-button" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <CommentSection comments={post.comments} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
