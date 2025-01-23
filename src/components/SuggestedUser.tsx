import User from "../models/user";
import { useSelector , useDispatch } from 'react-redux';
import { Avatar , AvatarImage , AvatarFallback } from "../components/ui/avatar";
import "../styles/components/SuggestedUser.scss";
import { Button } from "./ui/button";
import { addFollowing, removeFollowing } from "../redux/slices/userSlice";


const SuggestedUser = (user: User) => {
    const followedUsers = useSelector((state: any) => state.user).user.following;
    const dispatch = useDispatch();

    return (
        <div key={user.username} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.profilePicture} />
                  <AvatarFallback>{}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.username}</p>
                </div>
              </div>
              <Button
                size="sm"
                variant={followedUsers.includes(user.username) ? "outline" : "default"}
                onClick={() => {
                    if (followedUsers.includes(user.username)) {
                        dispatch(removeFollowing(user.username));
                    } else {
                        dispatch(addFollowing(user.username));
                    }
                }}
              >
                {followedUsers.includes(user.username) ? "Unfollow" : "Follow"}
              </Button>
            </div>
    );
}

export default SuggestedUser;