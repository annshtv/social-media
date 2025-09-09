import { Post } from './Posts';

export interface PostRepository {
  findAll(): Post[];
}