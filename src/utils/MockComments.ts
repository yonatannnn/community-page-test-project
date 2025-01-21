import PostComment from '../models/comment';
import { user2, user3 } from './MockUser';





export let comment2 : PostComment = {
    id: 2,
    user: user3,
    text: 'Thanks!',
    createdAt: new Date().toISOString(),
    replies: []
}

export let comment1 : PostComment = {
    id: 1,
    user: user2,
    text: 'Nice post!',
    createdAt: new Date().toISOString(),
    replies: [comment2]
}
export let comment3 : PostComment = {
    id: 3,
    user: user3,
    text: 'I totally agree!',
    createdAt: new Date().toISOString(),
    replies: [comment1 , comment2]
}

export let comment4 : PostComment = {
    id: 4,
    user: user2,
    text: 'Interesting perspective.',
    createdAt: new Date().toISOString(),
    replies: []
}

export let comment5 : PostComment = {
    id: 5,
    user: user3,
    text: 'Can you elaborate more?',
    createdAt: new Date().toISOString(),
    replies: [comment3]
}

comment1.replies.push(comment4, comment5);