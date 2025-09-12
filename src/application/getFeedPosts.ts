import type { PostRepository } from '../domain/PostRepository';
import type { Post } from '../domain/Posts';

export const getFeedPosts = (postRepository: PostRepository): Post[] => {
 
  return postRepository.findAll();
};