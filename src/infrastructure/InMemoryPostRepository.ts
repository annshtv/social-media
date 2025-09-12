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
    text: 'Looking for an amazing scientist...',
  },
  {
    id: 'post-2',
    author: {
      id: 'user-2',
      name: 'Paul Rudd',
      handle: '@antman_wasp',
      avatarUrl: paulAvatar,
      bio: 'Smallest creature in this beautiful universe...'
    },
    text: 'This is another post text here.',
  }
];

export const inMemoryPostRepository: PostRepository = {
  findAll(): Post[] {
    return posts;
  },
  add(post: Post): void {
    posts = [post, ...posts];
  },
  remove(id: string): void {
    posts = posts.filter((p) => p.id !== id); 
  }
};
