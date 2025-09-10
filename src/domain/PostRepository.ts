import type { Post } from './Posts';

export interface PostRepository {
  findAll(): Post[];
  add(post: Post): void;
}
