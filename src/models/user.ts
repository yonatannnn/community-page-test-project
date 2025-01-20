interface User {
    id: number;
    name: string;
    profilePicture: string;
    lastSeen: string;
    username: string;
    followers: Array<string>;
    following: Array<string>;
}

export default User;