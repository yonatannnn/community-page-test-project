import PostModel from '../models/postModel';
import { user1 , user3, user4, user5, user6 } from './MockUser';
import { comment1 , comment2 , comment3 , comment4 , comment5 } from './MockComments';

const mockPosts: PostModel[] = [
    {
        id: 1,
        user: user1,
        textContent: 'I love Manchester United! #GGMU #ManchesterUnited #RedDevils',
        pictureContent: 'https://fabrikbrands.com/wp-content/uploads/Manchester-United-Logo-1.png',
        createdAt: new Date().toISOString(),
        comments: [comment1],
        likes: [
            {
                user: 'alice_johnson',
                createdAt: new Date().toISOString()
            }
        ],
        shares: [
            {
                user: user3,
                createdAt: new Date().toISOString()
            }
        ]
    },
    {
        id: 2,
        user: user4,
        textContent: 'This is a post with a picture attached to it #picture',
        pictureContent: 'https://ichef.bbci.co.uk/ace/standard/819/cpsprodpb/b3ca/live/8261bfa0-064c-11ef-aa05-550274caccfa.jpg',
        createdAt: new Date().toISOString(),
        comments: [comment2 , comment5],
        likes: [],
        shares: []
    },
    {
        id: 3,
        user: user5,
        textContent: 'Another example post',
        pictureContent: 'https://cdn1.unitedinfocus.com/uploads/14/2024/12/GettyImages-2187721847-1-1140x760.jpg',
        createdAt: new Date().toISOString(),
        comments: [comment3],
        likes: [],
        shares: []
    },
    {
        id: 4,
        user: user6,
        textContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pictureContent: '',
        createdAt: new Date().toISOString(),
        comments: [comment4 , comment3],
        likes: [],
        shares: []
    }
];

export default mockPosts;
