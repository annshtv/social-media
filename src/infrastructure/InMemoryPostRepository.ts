import type { Post } from '../domain/Posts';
import type { PostRepository } from '../domain/PostRepository';
import tonyAvatar from '../pictures/image.png';
import paulAvatar from '../pictures/user1.png';

let posts: Post[] = [
  {
    id: 'post-1',
    author: {
      id: 'user-1',
      name: 'SlavaKPSS',
      handle: '@slavaKPSS',
      avatarUrl: tonyAvatar,
      bio: 'dancer'
    },
    text: 'Looking for an amazing scientist who knows how to build a suit that can fly high in the sky without any problem.',
  },
  {
    id: 'post-2',
    author: {
      id: 'user-2',
      name: 'Paul Rudd',
      handle: '@antman_wasp',
      avatarUrl: paulAvatar,
      bio: 'Smallest creature in this beautiful universe | Flying in colo....'
    },
    text: 'This is another post text here. You can add more details.'
  }
];

export const inMemoryPostRepository: PostRepository = {
  findAll(): Post[] {
    return posts;
  },
  add(post: Post): void {
    posts = [post, ...posts];
  }
};
