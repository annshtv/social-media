import type { User } from './User';

export type Post = {
  id: string;
  author: User;
  text: string;
  imageUrl?: string;
};