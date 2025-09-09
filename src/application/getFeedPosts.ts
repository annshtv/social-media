import { PostRepository } from '../domain/PostRepository';
import { Post } from '../domain/Posts';

export const getFeedPosts = (postRepository: PostRepository): Post[] => {
 
  return postRepository.findAll();
};