import User from '../models/user';

export let user1 : User = {
    id: 2,
    name: 'Jane Smith',
    profilePicture: 'https://passport-photo.online/images/cms/size_280_author_sylwia_cab85ba8d6.webp?quality=80&format=webp&width=1920',
    lastSeen: new Date().toISOString(),
    username: 'jane_smith',
    followers: ['john_doe'],
    following: ['alice_johnson']
}

export let user2 : User = {
        id: 1,
        name: 'John Doe',
        profilePicture: 'https://visafoto.com/img/docs/ph_1x1.jpg',
        lastSeen: new Date().toISOString(),
        username: 'john_doe',
        followers: ['jane_smith', 'alice_johnson'],
        following: ['bob_brown']
}


export let user3 : User = {
    id: 3,
    name: 'Bob Brown',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnEXSAU0EjPs9gg_l8q0VDTwDGLbwEUJ8UA&s',
    lastSeen: new Date().toISOString(),
    username: 'bob_brown',
    followers: ['john_doe'],
    following: ['jane_smith']
}


export let user4 : User = {
    id: 4,
    name: 'Jane Smith',
    profilePicture: 'https://64.media.tumblr.com/3c948972b7be8a79f1436393a3a26281/tumblr_ogw26dCy7A1smd799o1_1280.jpg',
    lastSeen: new Date().toISOString(),
    username: 'jane_smith',
    followers: ['john_doe'],
    following: ['alice_johnson']
}

export let user5 : User = {
    id: 5,
    name: 'Jane Smith',
    profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROFJNzXGm6a3hEmS0xnNKqc72_E3w5oMvdjg&s',
    lastSeen: new Date().toISOString(),
    username: 'jane_smith',
    followers: ['john_doe'],
    following: ['alice_johnson']
}


export let user6 : User = {
    id: 6,
    name: 'Jane Smith',
    profilePicture: 'https://passport-photo.online/images/cms/0b5f833a77056afb8d5d260437c119a5_1baa3bcc64.webp?quality=80&format=webp&width=1920',
    lastSeen: new Date().toISOString(),
    username: 'jane_smith',
    followers: ['john_doe'],
    following: ['alice_johnson']
}