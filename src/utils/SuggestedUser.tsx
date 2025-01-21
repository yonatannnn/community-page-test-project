import User from '../models/user';

export const suggestedUsers: User[] = [
    { id: 1, name: "User Name 1", profilePicture: "https://c8.alamy.com/comp/2R5JY5R/portrait-call-center-and-black-woman-with-a-smile-telemarketing-and-customer-service-with-headphones-face-female-person-and-agent-with-happiness-2R5JY5R.jpg", lastSeen: new Date().toISOString(), username: "@username1" , followers: [], following: []},
    { id: 2, name: "User Name 2", profilePicture: "https://cbx-prod.b-cdn.net/COLOURBOX60990543.jpg?width=800&height=800&quality=70", lastSeen: new Date().toISOString(), username: "@username2", followers: [], following: []},
    { id: 3, name: "User Name 3", profilePicture: "https://thumbs.dreamstime.com/z/happy-man-call-center-selfie-communication-portrait-customer-service-technical-support-social-media-face-286529369.jpg", lastSeen: new Date().toISOString(), username: "@username3" , followers: [], following: []},
    { id: 4, name: "User Name 4", profilePicture: "https://media.istockphoto.com/id/1468524236/photo/face-of-black-man-call-center-consultation-or-telemarketing-agent-in-technical-support-for.jpg?s=612x612&w=0&k=20&c=sXk4hHUvz4oPEr-FCVetKTydc1D3KN8iAoEUfYj8XwQ=", lastSeen: new Date().toISOString(), username: "@username4" , followers: [], following: []},
    { id: 5, name: "User Name 5", profilePicture: "https://www.shutterstock.com/image-vector/3d-render-style-illustration-call-260nw-2322979475.jpg", lastSeen: new Date().toISOString(), username: "@username5", followers: [], following: []},
];